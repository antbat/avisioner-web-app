import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user = new BehaviorSubject<User>(null);
    token = new BehaviorSubject<string>('');

    constructor() {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            this.user.next(new User(userData));
        }
        const token = localStorage.getItem('token');
        if (token) {
            this.token.next(token);
        }
    }
    public get isAuthorized(): boolean {
        return !! (this.user.value && this.token.value);
    }
}
