import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appDateFormat',
  standalone: true,
})
export class DateFormatPipe implements PipeTransform {
  transform(dateStr: string | undefined): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}
