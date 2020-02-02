import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat/chat.service';
import {ChatMessage} from '../../models/ChatMessage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

    constructor(
        private chatService: ChatService
    ) { }

    ngOnInit() {}
    sendMessage(msg: ChatMessage) {
        this.chatService.sendMessage(msg);
    }
}
