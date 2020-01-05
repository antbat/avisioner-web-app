import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';


import { UserStatusComponent } from './user-status/user-status.component';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import { SignUpDialogComponent } from './sign-up-dialog/sign-up-dialog.component';



@NgModule({
    declarations: [UserStatusComponent, SignInDialogComponent, SignUpDialogComponent],
    exports: [
        UserStatusComponent,
        SignUpDialogComponent,
        SignInDialogComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule
    ],
    entryComponents: [
        SignUpDialogComponent,
        SignInDialogComponent
    ]
})
export class UserModule { }
