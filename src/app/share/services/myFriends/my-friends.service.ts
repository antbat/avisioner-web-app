import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpinnerService } from '../spinner/spinner.service';
import { IAuthor } from '../../Interfaces/Author';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MyFriendsService {
    public myFriends$ = new BehaviorSubject<IAuthor[]>([]);
    constructor(
        private http: HttpClient,
        @Inject('API_AUTH') private authApi: string,
        private spinner: SpinnerService
    ) {
        this.getListofFriends().subscribe();
    }
    getListofFriends(): Observable<IAuthor[]> {
        const url = `${this.authApi}/user/myFriends`;
        return this.http
            .get<IAuthor[]>(url)
            .pipe(tap(friends => this.myFriends$.next(friends)));
    }
}
