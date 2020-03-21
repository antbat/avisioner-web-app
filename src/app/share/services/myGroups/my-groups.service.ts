import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpinnerService } from '../spinner/spinner.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MyGroupsService {
    public myGroups$ = new BehaviorSubject<any[]>([]);
    constructor(
        private http: HttpClient,
        @Inject('API_AUTH') private authApi: string,
        private spinner: SpinnerService
    ) {
        this.getListofMyGroups().subscribe();
    }

    getListofMyGroups(): Observable<any[]> {
        const url = `${this.authApi}/user/myGroups`;
        return this.http.get<any[]>(url).pipe(
            tap(friends => this.myGroups$.next(friends))
        );
    }
}
