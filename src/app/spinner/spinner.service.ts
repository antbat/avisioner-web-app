import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
    private counter = 0;
    public waiting  = new BehaviorSubject<boolean>(false);
    public start() {
        console.log(`spinner has started ${this.counter}`);
        this.counter ++;
        this.waiting.next(true);
    }
    public stop() {
        console.log(`spinner has stopped ${this.counter}`);
        if (this.counter === 1) {
            this.counter = 0;
            this.waiting.next(false);
        } else if (this.counter > 1) {
            this.counter--;
        }
    }
    constructor() { }
}
