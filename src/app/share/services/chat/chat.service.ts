import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IAuthor} from '../../Interfaces/Author';
import {ChatMessage} from '../../models/ChatMessage';
import {Bot} from '../../models/Bot.model';
import {SocketService} from '../socket/socket.service';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
    static readonly eventMessageType = 'message';
    public currentItemId = new BehaviorSubject<string>(null);
    public participants = new BehaviorSubject<IAuthor[]>([]);
    public conversation = new BehaviorSubject<ChatMessage[]>([]);

    constructor(
        private socketService: SocketService,
        private http: HttpClient,
        @Inject('API_CHAT') private chatApi: string,
    ) {
        this.socketService
            .fromEvent<string>(ChatService.eventMessageType)
            .pipe(map( (data) => {
                const msg = JSON.parse(data);
                return new ChatMessage(msg);
            }))
            .subscribe( msg => {
                console.log(msg);
                this.conversation.value.push(msg);
            });

    }

    public setChatWithBot(bot: Bot) {
        this.participants.next([bot]);
        if (bot.rootItem) {
            this.currentItemId.next(bot.rootItem);
            this.getConversationByItem();
        }

    }
    getConversationByItem() {
        const id = this.currentItemId.value;
        const url = this.chatApi + `/conversation?item=${id}`;
        this.http.get<ChatMessage[]>(url).pipe(
            map( allMessages => allMessages.map( message => new ChatMessage(message)))
        ).subscribe( messages => {
            messages.forEach( msg => {
                this.conversation.value.push(msg);
            });
        })
    }
    public sendMessage(msg: ChatMessage) {
        if (!msg.item && this.currentItemId.value) {
            msg.item = this.currentItemId.value;
        }
        this.conversation.value.push(msg);
        this.socketService.emit(ChatService.eventMessageType, msg);
    }

}
