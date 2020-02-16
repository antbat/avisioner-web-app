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
    @Input() msg: ChatMessage;
    authors: IAuthor[] = [];
    isMyMessage = false;

    typeOfUrlPointer = TypeOfUrlPointer;
    constructor(
        public chatService: ChatService,
        public authService: AuthService
    ) {
    }

    ngOnInit() {
        this.chatService.participants.subscribe( authors => this.authors = authors)
    }
    getNameById(id: string): string {
        let name = '';
        if (id && this.authService.user.value._id === id) {
            name = this.authService.user.value.displayName;
            this.isMyMessage = true;
        } else if (id && this.authors && this.authors.length > 0) {
            const author = this.authors.find ( a => a._id === id);
            if (author) {
                name = author.displayName;
            }
        }
        return name;
    }

}
