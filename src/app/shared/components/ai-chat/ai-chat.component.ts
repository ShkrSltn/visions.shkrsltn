import { Component, OnInit, Input, SecurityContext, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AiChatService, ChatMessage } from '../../../services/ai-chat.service';
import { RippleEffectDirective } from '../../directives/ripple-effect.directive';

// Расширяем интерфейс для хранения обработанного контента
interface DisplayChatMessage extends ChatMessage {
  processedContent?: SafeHtml;
}

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, RippleEffectDirective],
  templateUrl: './ai-chat.component.html',
  styleUrl: './ai-chat.component.scss'
})
export class AiChatComponent implements OnInit, AfterViewChecked {
  @Input() title: string = "Shakir's AI clone";
  @Input() subtitle: string = "Ask me anything";
  @ViewChild('chatMessages') chatMessagesRef!: ElementRef; // Ссылка на контейнер сообщений

  userMessage: string = '';
  chatHistory: DisplayChatMessage[] = [];
  isLoading: boolean = false;
  shouldScrollToBottom: boolean = false; // Флаг для отслеживания необходимости прокрутки

  // Предустановленные вопросы для быстрого выбора
  suggestedQuestions: string[] = [
    "What are your skills?",
    "How can I contact you?",
    "Where are you located?",
    "What is your background?",
    "What technologies do you work with?"
  ];

  constructor(
    private aiChatService: AiChatService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    // Добавляем приветственное сообщение
    this.addMessageToHistory({
      role: 'assistant',
      content: "Hi there! I'm Shakir's AI clone. Feel free to ask me anything about my skills, experience, or how to get in touch with me."
    });

    this.shouldScrollToBottom = true; // Установка флага для начальной прокрутки
  }

  ngAfterViewChecked() {
    // Проверяем флаг и выполняем прокрутку, если нужно
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false; // Сбрасываем флаг
    }
  }

  // Метод для прокрутки чата вниз
  scrollToBottom(): void {
    try {
      if (this.chatMessagesRef && this.chatMessagesRef.nativeElement) {
        this.chatMessagesRef.nativeElement.scrollTop = this.chatMessagesRef.nativeElement.scrollHeight;
      }
    } catch (err) {
      console.error('Ошибка при прокрутке чата:', err);
    }
  }

  // Метод для обработки HTML в сообщениях
  processMessageContent(message: DisplayChatMessage): void {
    if (message.role === 'assistant') {
      // Санитизируем HTML, чтобы предотвратить XSS-атаки
      const sanitizedHtml = this.sanitizer.sanitize(SecurityContext.HTML, message.content);
      if (sanitizedHtml) {
        message.processedContent = this.sanitizer.bypassSecurityTrustHtml(sanitizedHtml);
      } else {
        message.processedContent = message.content;
      }
    } else {
      message.processedContent = message.content;
    }
  }

  // Добавление сообщения в историю с обработкой контента
  addMessageToHistory(message: ChatMessage): void {
    const displayMessage: DisplayChatMessage = { ...message };
    this.processMessageContent(displayMessage);
    this.chatHistory.push(displayMessage);
    this.shouldScrollToBottom = true; // Устанавливаем флаг для прокрутки
  }

  sendMessage(): void {
    if (!this.userMessage.trim()) return;

    // Добавляем сообщение пользователя в историю
    this.addMessageToHistory({
      role: 'user',
      content: this.userMessage
    });

    const messageToSend = this.userMessage;
    this.userMessage = '';
    this.isLoading = true;

    // Прокручиваем чат вниз после отправки сообщения пользователя
    this.shouldScrollToBottom = true;

    // Отправляем запрос к API
    this.aiChatService.chat(messageToSend).subscribe({
      next: (response) => {
        if (response.choices && response.choices.length > 0) {
          this.addMessageToHistory(response.choices[0].message);
        }
        this.isLoading = false;
        this.shouldScrollToBottom = true; // Устанавливаем флаг для прокрутки после получения ответа
      },
      error: (error) => {
        console.error('Error communicating with AI service:', error);
        this.addMessageToHistory({
          role: 'assistant',
          content: "I'm sorry, I encountered an error while processing your request. Please try again later."
        });
        this.isLoading = false;
        this.shouldScrollToBottom = true; // Устанавливаем флаг для прокрутки после ошибки
      }
    });
  }

  askSuggestedQuestion(question: string): void {
    this.userMessage = question;
    this.sendMessage();
  }
}
