import { RippleDirective } from './ripple.directive';
import { ElementRef } from '@angular/core';

describe('RippleDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef(document.createElement('div'));
    const directive = new RippleDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
