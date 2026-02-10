import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[ceModel]',
  standalone: true,
  host: {
    '[attr.contenteditable]': '"plaintext-only"',
  },
})
export class ContentEditableModelDirective implements OnChanges {
  @Input() ceModel: string = '';
  @Output() ceModelChange = new EventEmitter<string>();

  private lastEmitted = '';

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ceModel']) {
      const newVal = this.ceModel || '';
      if (newVal !== this.lastEmitted) {
        this.el.nativeElement.innerText = newVal;
        this.lastEmitted = newVal;
      }
      this.updateEmptyClass();
    }
  }

  @HostListener('input')
  onInput(): void {
    const val = this.el.nativeElement.innerText;
    this.lastEmitted = val;
    this.ceModelChange.emit(val);
    this.updateEmptyClass();
  }

  @HostListener('blur')
  onBlur(): void {
    this.updateEmptyClass();
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const text = event.clipboardData?.getData('text/plain') || '';

    const sel = window.getSelection();
    if (!sel || !sel.rangeCount) return;

    const range = sel.getRangeAt(0);
    range.deleteContents();

    const textNode = document.createTextNode(text);
    range.insertNode(textNode);

    range.setStartAfter(textNode);
    range.setEndAfter(textNode);
    sel.removeAllRanges();
    sel.addRange(range);

    this.el.nativeElement.dispatchEvent(new Event('input', { bubbles: true }));
  }

  private updateEmptyClass(): void {
    const isEmpty = !this.el.nativeElement.innerText.trim();
    this.el.nativeElement.classList.toggle('is-empty', isEmpty);
  }
}
