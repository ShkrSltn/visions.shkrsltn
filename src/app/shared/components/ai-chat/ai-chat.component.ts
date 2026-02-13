import { Component, OnInit, Input, SecurityContext, ViewChild, ElementRef, AfterViewChecked, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AiChatService, ChatMessage } from '../../../services/ai-chat.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface DisplayChatMessage extends ChatMessage {
  processedContent?: SafeHtml;
  isTyping?: boolean;
  visibleContent?: string;
  fullContent?: string;
}

class TerminalSFX {
  private ctx: AudioContext | null = null;
  private _muted = false;
  private lastKeystroke = 0;

  get muted(): boolean { return this._muted; }

  toggleMute(): boolean {
    this._muted = !this._muted;
    return this._muted;
  }

  private getCtx(): AudioContext | null {
    if (!this.ctx) {
      try {
        this.ctx = new AudioContext();
      } catch {
        return null;
      }
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  private beep(freq: number, duration: number, volume: number, type: OscillatorType = 'square'): void {
    if (this._muted) return;
    const ctx = this.getCtx();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  }

  /** Subtle keystroke tick — throttled to avoid spam */
  keystroke(): void {
    const now = Date.now();
    if (now - this.lastKeystroke < 40) return;
    this.lastKeystroke = now;

    const freq = 1800 + Math.random() * 600; // slight randomness
    this.beep(freq, 0.025, 0.03, 'square');
  }

  /** Command submitted */
  send(): void {
    if (this._muted) return;
    const ctx = this.getCtx();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(1200, ctx.currentTime + 0.06);
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.08);
  }

  /** AI response received — two-tone descending */
  receive(): void {
    if (this._muted) return;
    const ctx = this.getCtx();
    if (!ctx) return;

    // First beep
    const o1 = ctx.createOscillator();
    const g1 = ctx.createGain();
    o1.type = 'square';
    o1.frequency.value = 1000;
    g1.gain.setValueAtTime(0.05, ctx.currentTime);
    g1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
    o1.connect(g1);
    g1.connect(ctx.destination);
    o1.start(ctx.currentTime);
    o1.stop(ctx.currentTime + 0.06);

    // Second beep (lower)
    const o2 = ctx.createOscillator();
    const g2 = ctx.createGain();
    o2.type = 'square';
    o2.frequency.value = 750;
    g2.gain.setValueAtTime(0.05, ctx.currentTime + 0.08);
    g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
    o2.connect(g2);
    g2.connect(ctx.destination);
    o2.start(ctx.currentTime + 0.08);
    o2.stop(ctx.currentTime + 0.14);
  }

  /** Click for buttons */
  click(): void {
    this.beep(1400, 0.02, 0.04, 'square');
  }

  /** Boot sequence — ascending arpeggio */
  boot(): void {
    if (this._muted) return;
    const ctx = this.getCtx();
    if (!ctx) return;

    const notes = [400, 600, 800, 1000];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.06;
      gain.gain.setValueAtTime(0.04, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.05);
    });
  }
}

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './ai-chat.component.html',
  styleUrl: './ai-chat.component.scss'
})
export class AiChatComponent implements OnInit, AfterViewChecked {
  @Input() title: string = "Shakir's AI clone";
  @Input() subtitle: string = "Ask me anything";
  @ViewChild('chatMessages') chatMessagesRef!: ElementRef;

  userMessage: string = '';
  chatHistory: DisplayChatMessage[] = [];
  isLoading: boolean = false;
  shouldScrollToBottom: boolean = false;
  typingSpeed: number = 3;

  // Sound engine
  sfx = new TerminalSFX();
  soundMuted = false;

  suggestedQuestions: string[] = [
    "AI_ASSISTANT.AI_CHAT.SUGGESTED_QUESTIONS_1",
    "AI_ASSISTANT.AI_CHAT.SUGGESTED_QUESTIONS_2",
    "AI_ASSISTANT.AI_CHAT.SUGGESTED_QUESTIONS_3",
    "AI_ASSISTANT.AI_CHAT.SUGGESTED_QUESTIONS_4",
    "AI_ASSISTANT.AI_CHAT.SUGGESTED_QUESTIONS_5",
    "AI_ASSISTANT.AI_CHAT.SUGGESTED_QUESTIONS_6"
  ];

  private destroyRef = inject(DestroyRef);

  constructor(
    private aiChatService: AiChatService,
    private sanitizer: DomSanitizer,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.translate.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.initializeChat();
      });

    this.initializeChat();
  }

  private initializeChat(): void {
    this.chatHistory = [];

    const firstMessage = this.translate.instant("AI_ASSISTANT.AI_CHAT.FIRST_MESSAGE");
    this.addMessageToHistory({
      role: 'assistant',
      content: firstMessage
    });

    this.shouldScrollToBottom = true;

    // Boot sound (slightly delayed so AudioContext can initialize from user gesture)
    setTimeout(() => this.sfx.boot(), 300);
  }

  ngAfterViewChecked() {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  scrollToBottom(): void {
    try {
      if (this.chatMessagesRef?.nativeElement) {
        this.chatMessagesRef.nativeElement.scrollTop = this.chatMessagesRef.nativeElement.scrollHeight;
      }
    } catch (err) {
      console.error('Error during scrolling:', err);
    }
  }

  // ─── Sound Controls ──────────────────────────────────
  toggleSound(): void {
    this.soundMuted = this.sfx.toggleMute();
    if (!this.soundMuted) {
      this.sfx.click();
    }
  }

  onInputKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') return; // handled separately
    this.sfx.keystroke();
  }

  // ─── Typing Effect ───────────────────────────────────
  startTypingEffect(message: DisplayChatMessage): void {
    if (!message.fullContent) return;

    let currentIndex = 0;
    const fullContent = message.fullContent;
    const totalLength = fullContent.length;

    const typingInterval = setInterval(() => {
      try {
        if (currentIndex < totalLength) {
          message.visibleContent = fullContent.substring(0, currentIndex + 1);
          message.processedContent = this.sanitizer.bypassSecurityTrustHtml(message.visibleContent);
          currentIndex++;

          if (this.hasUnclosedTags(message.visibleContent)) {
            currentIndex = this.findNextTagClose(fullContent, currentIndex);
          }

          this.shouldScrollToBottom = true;
        } else {
          clearInterval(typingInterval);
          message.isTyping = false;
          message.processedContent = this.sanitizer.bypassSecurityTrustHtml(fullContent);
        }
      } catch (error) {
        console.error('Error during typing effect:', error);
        clearInterval(typingInterval);
        message.isTyping = false;
        message.processedContent = this.sanitizer.bypassSecurityTrustHtml(fullContent);
      }
    }, this.typingSpeed);
  }

  private hasUnclosedTags(html: string): boolean {
    const openTagsCount = (html.match(/<[^\/][^>]*>/g) || []).length;
    const closeTagsCount = (html.match(/<\/[^>]*>/g) || []).length;
    return openTagsCount > closeTagsCount;
  }

  private findNextTagClose(content: string, startIndex: number): number {
    const nextCloseTag = content.indexOf('>', startIndex);
    return nextCloseTag !== -1 ? nextCloseTag + 1 : startIndex;
  }

  addMessageToHistory(message: ChatMessage): void {
    const displayMessage: DisplayChatMessage = { ...message };
    this.chatHistory.push(displayMessage);
    this.shouldScrollToBottom = true;

    setTimeout(() => {
      this.processMessageContent(displayMessage);
    }, 0);
  }

  processMessageContent(message: DisplayChatMessage): void {
    if (message.role === 'assistant') {
      try {
        const sanitizedHtml = this.sanitizer.sanitize(SecurityContext.HTML, message.content) || '';

        if (sanitizedHtml.trim()) {
          message.fullContent = sanitizedHtml;
          message.visibleContent = '';
          message.isTyping = true;

          this.startTypingEffect(message);
        } else {
          message.processedContent = this.sanitizer.bypassSecurityTrustHtml(message.content);
        }
      } catch (error) {
        console.error('Error processing message content:', error);
        message.processedContent = this.sanitizer.bypassSecurityTrustHtml(message.content);
      }
    } else {
      message.processedContent = message.content;
    }
  }

  sendMessage(): void {
    if (!this.userMessage.trim()) return;

    this.sfx.send();

    this.addMessageToHistory({
      role: 'user',
      content: this.userMessage
    });

    const messageToSend = this.userMessage;
    this.userMessage = '';
    this.isLoading = true;
    this.shouldScrollToBottom = true;

    this.aiChatService.chat(messageToSend).subscribe({
      next: (response) => {
        if (response.choices && response.choices.length > 0) {
          this.sfx.receive();
          this.addMessageToHistory(response.choices[0].message);
        }
        this.isLoading = false;
        this.shouldScrollToBottom = true;
      },
      error: (error) => {
        console.error('Error communicating with AI service:', error);
        this.sfx.receive();
        this.addMessageToHistory({
          role: 'assistant',
          content: "I'm sorry, I encountered an error while processing your request. Please try again later."
        });
        this.isLoading = false;
        this.shouldScrollToBottom = true;
      }
    });
  }

  askSuggestedQuestion(question: string): void {
    this.sfx.click();
    const translatedQuestion = this.translate.instant(question);
    this.userMessage = translatedQuestion;
    this.sendMessage();
  }
}
