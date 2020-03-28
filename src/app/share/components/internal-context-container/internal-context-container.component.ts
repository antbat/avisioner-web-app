import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material';



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
    constructor(private _bottomSheetRef: MatBottomSheetRef<BottomContextSheetComponent>) { }

    openLink(event: MouseEvent): void {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
