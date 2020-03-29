import { Injectable, Inject } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { SpinnerService } from '../spinner/spinner.service'
import { tap } from 'rxjs/operators'
import { IRoomDetails, IRoom } from '../../models/Room.model'
import { IGroup } from '../../models/Group.model'
import { IItem } from '../../models/Item.model'
import { IPublicUser, TypeOfUser } from '../../../user/user.model'
import { ChatMessage } from '../../models/ChatMessage'
import { ICommand, INewItemCreation, IOntology } from '../../models/Bot.model'
import { BotService } from '../bot/bot.service'

export interface IBotCommand {
    bot: IPublicUser,
    commands: ICommand[]
}
export interface IBotNewItemCreation {
    bot: IPublicUser,
    items: INewItemCreation[]
}
export interface IBotOntology {
    bot: IPublicUser,
    ontology: IOntology
}

@Injectable({
    providedIn: 'root'
})
export class MyRoomsService {
    public myRooms$ = new BehaviorSubject<any[]>([])

    public currentRoom$ = new BehaviorSubject<IRoom>(null)
    public currentRoomGroup$ = new BehaviorSubject<IGroup>(null)
    public currentRoomRootItemContext$ = new BehaviorSubject<string>(null)
    public currentRoomParticipants$ = new BehaviorSubject<IPublicUser[]>([])

    public currentRoomBotCommand$ = new BehaviorSubject<Array<IBotCommand>>([])
    public currentRoomNewItemCreate$ = new BehaviorSubject<Array<IBotNewItemCreation>>([])
    public currentRoomBotOntologies$ = new BehaviorSubject<Array<IBotOntology>>([])

    constructor(
        private http: HttpClient,
        @Inject('API_AUTH') private authApi: string,
        private spinner: SpinnerService,
        private botService: BotService
    ) {
        this.getListOfRooms().subscribe()
        this.botService.enrichedData$.subscribe(enrichedData => {
            if (enrichedData && this.myRooms$.value && this.currentRoomParticipants$.value) {
                const bots = this.currentRoomParticipants$.value.filter(e => (e.typeOfUser === TypeOfUser.robot && enrichedData.has(e._id)))

                const commands = bots.map(bot => ({
                    bot,
                    commands: enrichedData.get(bot._id).command
                }))
                this.currentRoomBotCommand$.next(commands)

                const items = bots.map(bot => ({
                    bot,
                    items: enrichedData.get(bot._id).create
                }))
                this.currentRoomNewItemCreate$.next(items)

                const ontologies = bots.map(bot => ({
                    bot,
                    ontology: enrichedData.get(bot._id).ontology
                }))
                this.currentRoomBotOntologies$.next(ontologies)
            }
        })
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
