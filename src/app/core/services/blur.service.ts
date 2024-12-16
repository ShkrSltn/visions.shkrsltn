import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BlurService {
    private blurState = new BehaviorSubject<boolean>(false);
    blurState$ = this.blurState.asObservable();

    toggleBlur(): void {
        this.blurState.next(!this.blurState.value);
    }

    isBlurred(): boolean {
        return this.blurState.value;
    }
}