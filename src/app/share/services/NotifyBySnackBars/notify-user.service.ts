import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotifyUserService {
    constructor(
        private snackBar: MatSnackBar
    ) { }
    public notify(message: string, seconds: number) {
        this.snackBar.open(message, 'dismiss', {
            duration: seconds * 1000,
        });
    }
}
