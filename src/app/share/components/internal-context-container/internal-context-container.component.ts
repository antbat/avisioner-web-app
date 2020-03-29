import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material';
import { BotService } from '../../services/bot/bot.service';
import { MyRoomsService, IBotNewItemCreation } from '../../services/myRooms/my-rooms.service';
import { Observable } from 'rxjs';
import { IPublicUser } from 'src/app/user/user.model';
import { INewItemCreation } from '../../models/Bot.model';



@Component({
    selector: 'app-internal-context-container',
    templateUrl: './internal-context-container.component.html',
    styleUrls: ['./internal-context-container.component.css']
})
export class InternalContextContainerComponent {
    constructor(private _bottomSheet: MatBottomSheet) { }

    openBottomSheet(): void {
        this._bottomSheet.open(BottomContextSheetComponent);
    }

}

@Component({
    selector: 'app-bottom-context-sheet',
    templateUrl: './bottom-context-sheet.component.html',
    styleUrls: ['./bottom-context-sheet.component.css']
})
export class BottomContextSheetComponent {
    public newItemCreation$: Observable<Array<IBotNewItemCreation>>

    constructor(
        private _bottomSheetRef: MatBottomSheetRef<BottomContextSheetComponent>,
        private roomService: MyRoomsService
    ) {
        this.newItemCreation$ = this.roomService.currentRoomNewItemCreate$
    }

    createNewItem(bot: IPublicUser, item: INewItemCreation): void {
        console.dir(bot, item)
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
