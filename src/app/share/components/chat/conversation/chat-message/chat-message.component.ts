import { Component, Input, OnInit } from '@angular/core'
import { ChatMessage, TypeOfUrlPointer } from '../../../../models/ChatMessage'
import { ChatService } from '../../../../services/chat/chat.service'
import { IAuthor } from '../../../../Interfaces/Author'
import { AuthService } from '../../../../../user/services/auth.service'
import { MyRoomsService } from 'src/app/share/services/myRooms/my-rooms.service'
import { IPublicUser } from '../../../../../user/user.model'

@Component({
    selector: 'app-chat-message',
    templateUrl: './chat-message.component.html',
    styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
    typeOfUrlPointer = TypeOfUrlPointer
    message: ChatMessage
    author: IPublicUser
    whoReadThisMessage: string

    @Input() set msg(message: ChatMessage) {
        this.message = message
        if (
            message.author &&
            this.authService.user.value._id === message.author
        ) {
            this.author = this.authService.user.value
            this.state.isMyMessage = true
        } else {
            this.author = this.roomService.currentRoomParticipants$.value?.find(
                e => e._id === message.author
            )
        }
        this.whoReadThisMessage = this.roomService.currentRoomParticipants$.value
            .filter(e => !message.shouldRead.includes(e._id))
            .map(e => e.displayName)
            .join(', ')
    }
    authors: IAuthor[] = []
    state = {
        isMyMessage: false
    }

    constructor(
        public chatService: ChatService,
        public roomService: MyRoomsService,
        public authService: AuthService
    ) { }
    ngOnInit() {
        // this.chatService.participants.subscribe(authors => this.authors = authors);
    }
}
