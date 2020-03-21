import { Component, OnInit, Input } from '@angular/core'
import { ChatService } from '../../services/chat/chat.service'
import { IAuthor } from '../../Interfaces/Author'
import { IPublicUser, TypeOfUser } from '../../models/IPublicUser.interface'
import { MyRoomsService } from '../../services/myRooms/my-rooms.service'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-participants',
    templateUrl: './participants.component.html',
    styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
    participants$: Observable<IPublicUser[]>
    typeOfUSer = TypeOfUser
    constructor(private roomService: MyRoomsService) {
        this.participants$ = this.roomService.currentRoomParticipants$
    }

    ngOnInit() {

    }
    getUrl(user: IPublicUser): string {
        switch (user.typeOfUser) {
            case TypeOfUser.human: return '/userPage/' + user._id
            case TypeOfUser.robot: return '/robot/' + user._id
        }
    }
}
