import {Component, Input, OnInit} from '@angular/core';
import {ChatMessage, TypeOfUrlPointer} from '../../../../models/ChatMessage';
import {ChatService} from '../../../../services/chat/chat.service';
import {IAuthor} from '../../../../Interfaces/Author';
import {AuthService} from '../../../../../user/services/auth.service';

@Component({
    selector: 'app-chat-message',
    templateUrl: './chat-message.component.html',
    styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
    message: ChatMessage;
    author: string;
    @Input() set msg(message: ChatMessage){
        this.message = message;
        if (message.author && this.authService.user.value._id === message.author) {
            this.author = this.authService.user.value.displayName;
            this.state.isMyMessage = true;
        } else if (message.author && this.authors && this.authors.length > 0) {
            const author = this.authors.find ( a => a._id === message.author);
            if (author) {
                this.author = author.displayName;
            }
        }
    };
    authors: IAuthor[] = [];
    state = {
        isMyMessage: false
    };
    typeOfUrlPointer = TypeOfUrlPointer;
    constructor(
        public chatService: ChatService,
        public authService: AuthService
    ) {
    }
    ngOnInit() {
        this.chatService.participants.subscribe( authors => this.authors = authors);
    }
}
