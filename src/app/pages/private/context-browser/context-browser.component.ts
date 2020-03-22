import { Component, OnInit } from '@angular/core';
import { MyRoomsService } from 'src/app/share/services/myRooms/my-rooms.service';
import { IGroup } from 'src/app/share/models/Group.model';
import { IPublicUser } from '../../../user/user.model';
import { IRoom, IRoomDetails } from 'src/app/share/models/Room.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-context-browser',
    templateUrl: './context-browser.component.html',
    styleUrls: ['./context-browser.component.css']
})
export class ContextBrowserComponent implements OnInit {
    constructor(
        public roomService: MyRoomsService,
        private route: ActivatedRoute,

    ) { }
    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.roomService.setUpCurrentRoom(params.get('id'))
        })
    }

}
