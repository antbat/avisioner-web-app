import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.css']
})
export class SignInDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<SignInDialogComponent>
    ) { }

    ngOnInit() {
    }
    onCloseClick(): void {
        this.dialogRef.close();
    }

}
