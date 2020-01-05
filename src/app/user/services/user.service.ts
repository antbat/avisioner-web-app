import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public user: BehaviorSubject<User> = new BehaviorSubject(null);
    constructor() { }
}
