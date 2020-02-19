import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IAuthor} from '../../Interfaces/Author';
import {ChatMessage, TypeofMessage} from '../../models/ChatMessage';
import {Bot} from '../../models/Bot.model';
import {SocketService} from '../socket/socket.service';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../user/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
    static readonly eventMessageType = 'message';
    public currentItemId = new BehaviorSubject<string>(null);
    public currentRootItemId = new BehaviorSubject<string>(null);
    public participants = new BehaviorSubject<IAuthor[]>([]);
    public bot = new BehaviorSubject<Bot>(null);
    public conversation = new BehaviorSubject<ChatMessage[]>([]);
    public question = new BehaviorSubject<ChatMessage>(null);

    constructor(
        private socketService: SocketService,
        private http: HttpClient,
        private authService: AuthService,
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
                if(msg.typeOfMessage === TypeofMessage.question) {
                    this.question.next(msg);
                }
            });

    }

    public setChatWithBot(bot: Bot) {
        this.participants.next([bot]);
        this.bot.next(bot);
        if (bot.rootItem) {
            this.currentItemId.next(bot.rootItem);
            this.currentRootItemId.next(bot.rootItem);
            this.getConversationByItem();
        }

    }
    getConversationByItem() {
        const itemId = this.currentItemId.value;
        const rootItemId = this.currentRootItemId.value;
        const url = this.chatApi + `/conversation?item=${itemId}&rootItem=${rootItemId}`;
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
        if (!msg.rootItem && this.currentRootItemId.value) {
            msg.rootItem = this.currentRootItemId.value;
        }
        msg.author = this.authService.user.value._id;
        this.conversation.value.push(msg);
        this.socketService.emit(ChatService.eventMessageType, msg);
    }

}
