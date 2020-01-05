import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { UserStatusComponent } from './user-status/user-status.component';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import { SignUpDialogComponent } from './sign-up-dialog/sign-up-dialog.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [UserStatusComponent, SignInDialogComponent, SignUpDialogComponent],
    exports: [
        UserStatusComponent,
        SignUpDialogComponent,
        SignInDialogComponent,
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        ReactiveFormsModule,
        FormsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        HttpClientModule
    ],
    entryComponents: [
        SignUpDialogComponent,
        SignInDialogComponent
    ]
})
export class UserModule { }
