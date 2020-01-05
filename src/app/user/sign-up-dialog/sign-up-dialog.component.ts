import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.css']
})
export class SignUpDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<SignUpDialogComponent>
    ) { }

    ngOnInit() {
    }

    onCloseClick(): void {
        this.dialogRef.close();
    }

}
