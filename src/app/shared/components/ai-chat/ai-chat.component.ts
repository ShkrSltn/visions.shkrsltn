import { Component, OnInit, Input, SecurityContext, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AiChatService, ChatMessage } from '../../../services/ai-chat.service';
import { RippleEffectDirective } from '../../directives/ripple-effect.directive';

// Расширяем интерфейс для хранения обработанного контента
interface DisplayChatMessage extends ChatMessage {
  processedContent?: SafeHtml;
  isTyping?: boolean;
  visibleContent?: string;
  fullContent?: string;
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
  typingSpeed: number = 10; // Символов в миллисекунду (можно настроить)

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

  // Метод для эффекта печатания
  startTypingEffect(message: DisplayChatMessage): void {
    if (!message.fullContent) return;

    let currentIndex = 0;
    const fullContent = message.fullContent;
    const totalLength = fullContent.length;

    // Используем более надежный интервал
    const typingInterval = setInterval(() => {
      try {
        if (currentIndex < totalLength) {
          // Добавляем следующий символ
          message.visibleContent = fullContent.substring(0, currentIndex + 1);
          // Обновляем отображаемый контент
          message.processedContent = this.sanitizer.bypassSecurityTrustHtml(message.visibleContent);
          currentIndex++;

          // Проверяем, что HTML-теги корректно закрыты
          if (this.hasUnclosedTags(message.visibleContent)) {
            // Если есть незакрытые теги, ускоряем печатание до закрытия тега
            currentIndex = this.findNextTagClose(fullContent, currentIndex);
          }

          this.shouldScrollToBottom = true;
        } else {
          // Завершаем эффект печатания
          clearInterval(typingInterval);
          message.isTyping = false;
          message.processedContent = this.sanitizer.bypassSecurityTrustHtml(fullContent);
        }
      } catch (error) {
        console.error('Error during typing effect:', error);
        // В случае ошибки завершаем эффект и показываем полный текст
        clearInterval(typingInterval);
        message.isTyping = false;
        message.processedContent = this.sanitizer.bypassSecurityTrustHtml(fullContent);
      }
    }, this.typingSpeed);
  }

  // Проверка на наличие незакрытых HTML-тегов
  private hasUnclosedTags(html: string): boolean {
    const openTagsCount = (html.match(/<[^\/][^>]*>/g) || []).length;
    const closeTagsCount = (html.match(/<\/[^>]*>/g) || []).length;
    return openTagsCount > closeTagsCount;
  }

  // Поиск позиции закрытия следующего тега
  private findNextTagClose(content: string, startIndex: number): number {
    const nextCloseTag = content.indexOf('>', startIndex);
    return nextCloseTag !== -1 ? nextCloseTag + 1 : startIndex;
  }

  // Добавление сообщения в историю с обработкой контента
  addMessageToHistory(message: ChatMessage): void {
    const displayMessage: DisplayChatMessage = { ...message };
    this.chatHistory.push(displayMessage); // Сначала добавляем в историю
    this.shouldScrollToBottom = true;

    // Затем обрабатываем контент (асинхронно)
    setTimeout(() => {
      this.processMessageContent(displayMessage);
    }, 0);
  }

  // Метод для обработки HTML в сообщениях
  processMessageContent(message: DisplayChatMessage): void {
    if (message.role === 'assistant') {
      try {
        // Санитизируем HTML, чтобы предотвратить XSS-атаки
        const sanitizedHtml = this.sanitizer.sanitize(SecurityContext.HTML, message.content) || '';

        // Проверяем, что контент не пустой
        if (sanitizedHtml.trim()) {
          message.fullContent = sanitizedHtml;
          message.visibleContent = '';
          message.isTyping = true;

          // Начинаем эффект печатания
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
