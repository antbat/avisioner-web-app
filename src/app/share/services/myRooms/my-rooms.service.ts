import { Injectable, Inject } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { SpinnerService } from '../spinner/spinner.service'
import { tap } from 'rxjs/operators'
import { IRoomDetails, IRoom } from '../../models/Room.model'
import { IGroup } from '../../models/Group.model'
import { IItem } from '../../models/Item.model'
import { IPublicUser } from '../../models/IPublicUser.interface'
import { ChatMessage } from '../../models/ChatMessage'

@Injectable({
    providedIn: 'root'
})
export class MyRoomsService {
    public myRooms$ = new BehaviorSubject<any[]>([])

    public currentRoom$ = new BehaviorSubject<IRoom>(null)
    public currentRoomGroup$ = new BehaviorSubject<IGroup>(null)
    public currentRoomRootItemContext$ = new BehaviorSubject<string>(null)
    public currentRoomParticipants$ = new BehaviorSubject<IPublicUser[]>([])

    constructor(
        private http: HttpClient,
        @Inject('API_AUTH') private authApi: string,
        private spinner: SpinnerService
    ) {
        this.getListOfRooms().subscribe()
    }
    getListOfRooms(): Observable<any> {
        const url = `${this.authApi}/user/myRooms`
        return this.http.get<any>(url).pipe(
            tap(data => {
                const rooms = data.body.hits.hits
                this.myRooms$.next(rooms)
            })
        )
    }
    setUpCurrentRoom(roomId: string) {
        const url = `${this.authApi}/room/details/${roomId}`
        return this.http
            .get<IRoomDetails>(url)
            .subscribe(data => {
                this.currentRoomGroup$.next(data.group);
                this.currentRoomParticipants$.next(data.participants);
                this.currentRoom$.next(data.room)
                this.currentRoomRootItemContext$.next(data.room.item)
            })
    }
}
