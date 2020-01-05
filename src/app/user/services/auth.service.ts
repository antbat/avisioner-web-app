import {Inject, Injectable} from '@angular/core';
import { User } from '../user.model';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly tokenStorageKey = 'av20-token';
    private readonly userStorageKey = 'av20-user';

    user = new BehaviorSubject<User>(null);
    token = new BehaviorSubject<string>('');

    constructor(
        private http: HttpClient,
        @Inject('API_AUTH') private authApi: string
    ) {
        const userData = JSON.parse(localStorage.getItem(this.userStorageKey));
        if (userData) {
            this.user.next(new User(userData));
        }
        const token = localStorage.getItem(this.tokenStorageKey);
        if (token) {
            this.token.next(token);
        }
    }
    public get isAuthorized(): boolean {
        return !! (this.user.value && this.token.value);
    }
    public sendPinCodeToEmail(email: string): Observable<void> {
        const url = `${this.authApi}/signUp/email`;
        return this.http.post(url, { email }).pipe(
            tap( (data: any) => {
                if (data && data.preToken) {
                    this.tokenUpdate(data.preToken);
                }
            })
        );
    }
    public verifyEmailByCode(code: string, email: string): Observable<void> {
        const url = `${this.authApi}/signUp/confirmEmail`;
        return this.http.post(url, { email, code}).pipe(
            tap( (data: any) => {
                if (data && data.token) {
                    this.tokenUpdate(data.token);
                }
            })
        );
    }
    public signUp(displayName: string, password: string): Observable<void> {
        const url = `${this.authApi}/signUp/`;
        return this.http.post(url, {displayName, password}).pipe(
            tap( (userData: any) => {
                if (userData) {
                    const user = new User(userData);
                    this.userUpdate(user);
                }
            })
        );
    }
    public signIn(email: string, password: string): Observable<void> {
        const url = `${this.authApi}/signIn/`;
        return this.http.post(url, {email, password}).pipe(
            tap( (data: any) => {
                if (data && data.user && data.token) {
                    this.userUpdate(data.user);
                    this.tokenUpdate(data.token);
                }
            })
        );
    }
    public logOut() {
        localStorage.removeItem(this.tokenStorageKey);
        localStorage.removeItem(this.userStorageKey);
        this.token.next(null);
        this.user.next(null);
    }
    private tokenUpdate(token: string) {
        this.token.next(token);
        localStorage.setItem(this.tokenStorageKey, token);
    }
    private userUpdate(user: User) {
        this.user.next(user);
        localStorage.setItem(this.userStorageKey, JSON.stringify(user));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.error(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}
