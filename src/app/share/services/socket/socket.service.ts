import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {AuthService} from '../../../user/services/auth.service';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService extends Socket {
    constructor(
        private authService: AuthService
    ) {
        super({ url: environment.API.sockets, options: {
            query: {
                token: authService.token.value,
                secure: true
            }
        } });
        console.log('socket init', authService.token.value);

    }
}
