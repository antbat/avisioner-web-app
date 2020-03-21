import { Component, OnInit } from '@angular/core';
import { BotService } from '../../../share/services/bot/bot.service';
import { Observable, pipe } from 'rxjs';
import { Bot } from '../../../share/models/Bot.model';
import { map } from 'rxjs/operators';
import { IAuthor } from 'src/app/share/Interfaces/Author';
import { MyFriendsService } from 'src/app/share/services/myFriends/my-friends.service';
import { MyGroupsService } from 'src/app/share/services/myGroups/my-groups.service';
import { MyRoomsService } from 'src/app/share/services/myRooms/my-rooms.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    myBots: Observable<String[]>;
    myFriends: Observable<String[]>;
    myGroups: Observable<String[]>;
    myRooms: Observable<any[]>

    constructor(
        public botService: BotService,
        public myFriendsService: MyFriendsService,
        public myGroupsService: MyGroupsService,
        public myRoomsService: MyRoomsService
    ) { }

    ngOnInit(): void {
        this.myBots = this.botService.myBots$.pipe(
            map(e => e.map(bot => bot.displayName))
        );
        this.myFriends = this.myFriendsService.myFriends$.pipe(
            map(friends => friends.map(e => e.displayName))
        );
        this.myGroups = this.myGroupsService.myGroups$.pipe(
            map(groups => groups.map(e => e.name))
        );
        this.myRooms = this.myRoomsService.myRooms$.pipe(
            map(rooms => rooms.map(e => {
                e._source._id = e._id
                return e._source
            }))
        );
    }
}
