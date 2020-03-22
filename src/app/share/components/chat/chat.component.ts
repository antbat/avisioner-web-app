import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';
import { ChatMessage } from '../../models/ChatMessage';
import { MyRoomsService } from '../../services/myRooms/my-rooms.service';
import { BehaviorSubject } from 'rxjs';
import { IRoom } from '../../models/Room.model';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

    private currentRoom$: BehaviorSubject<IRoom>

    constructor(
        private chatService: ChatService,
        private roomService: MyRoomsService
    ) {
        this.currentRoom$ = this.roomService.currentRoom$
    }

    ngOnInit() { }
    sendMessage(msg: ChatMessage) {
        msg.room = this.currentRoom$.value._id
        this.chatService.sendMessage(msg);
    }
}
