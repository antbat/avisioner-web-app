import { Inject, Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAuthor } from '../../Interfaces/Author';
import { ChatMessage, TypeofMessage } from '../../models/ChatMessage';
import { Bot } from '../../models/Bot.model';
import { SocketService } from '../socket/socket.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../user/services/auth.service';
import { MyRoomsService } from '../myRooms/my-rooms.service';
import { IRoom } from '../../models/Room.model';


@Injectable({
    providedIn: 'root'
})
export class ChatService {
    static readonly eventMessageType = 'message';
    static readonly unreadStats = 'unreadStats';

    public currentRoom$ = new BehaviorSubject<IRoom>(null);
    public question = new BehaviorSubject<ChatMessage>(null);
    public incomeMessage$ = new EventEmitter<ChatMessage>(null);

    private allConversationByRooms = new Map<string, ChatMessage[]>()
    private unreadMessagesByRooms = new Map<string, BehaviorSubject<number>>()


    constructor(
        private socketService: SocketService,
        private http: HttpClient,
        private authService: AuthService,
        private roomService: MyRoomsService,
        @Inject('API_CHAT') private chatApi: string,
    ) {
        this.currentRoom$ = this.roomService.currentRoom$
        this.socketService
            .fromEvent<string>(ChatService.eventMessageType)
            .pipe(map((data) => {
                const msg = JSON.parse(data);
                return new ChatMessage(msg);
            }))
            .subscribe(msg => {
                console.log(msg);
                const room = msg.room;
                this.allConversationByRooms.get(room).push(msg)
                this.incomeMessage$.next(msg)
                // if (msg.typeOfMessage === TypeofMessage.question) {
                //     this.question.next(msg);
                // }
            });

        // get start counters of unread messages
        // just first mesage after connection to socket.io chat
        this.socketService
            .fromEvent<any>(ChatService.unreadStats)
            .subscribe(data => {
                data?.body?.aggregations?.rooms?.buckets.forEach(bucket => {
                    if (!this.unreadMessagesByRooms.has(bucket.key)) {
                        this.unreadMessagesByRooms.set(bucket.key, new BehaviorSubject<number>(0))
                    }
                    const counter = this.unreadMessagesByRooms.get(bucket.key)
                    counter.next(bucket.doc_count)
                })
            });

        this.currentRoom$.subscribe((room: IRoom) => {

        })

    }

    getConversationByRoom(roomId: string): Observable<ChatMessage[]> {
        const url = this.chatApi + `/conversation?room=${roomId}`;
        return this.http.get<ChatMessage[]>(url).pipe(
            map(allMessages => allMessages.map(message => new ChatMessage(message)))
        )
    }
    public sendMessage(msg: ChatMessage) {
        msg.author = this.authService.user.value._id;
        // this.conversation.value.push(msg);
        this.socketService.emit(ChatService.eventMessageType, msg);
    }
    public getCounterOfUnreadMessagesForRoom(roomId: string): BehaviorSubject<number> {
        if (!this.unreadMessagesByRooms.has(roomId)) {
            this.unreadMessagesByRooms.set(roomId, new BehaviorSubject<number>(0))
        }
        return this.unreadMessagesByRooms.get(roomId)
    }

}
