import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { MatDialog } from '@angular/material';
import { SignInDialogComponent } from '../sign-in-dialog/sign-in-dialog.component';
import {SignUpDialogComponent} from '../sign-up-dialog/sign-up-dialog.component';
import {User} from '../user.model';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent implements OnInit {
    user: User;

    constructor(
        public authService: AuthService,
        public dialog: MatDialog
    ) { }
    ngOnInit() {
        this.authService.user.subscribe( (user: User) => {
            this.user = user;
        });
    }
    signInDialog() {
        console.log('signIn');
        const dialogRef = this.dialog.open(SignInDialogComponent, {
            width: '350px'
        });
        dialogRef.afterClosed().subscribe( result => {
            console.log('dialog closed ', result);
        });
    }
    signUpDialog() {
        console.log('signUp');
        const dialogRef = this.dialog.open(SignUpDialogComponent, {
            width: '450px'
        });
        dialogRef.afterClosed().subscribe( result => {
            console.log('dialog closed ', result);
        });
    }

    signOut() {
        this.authService.logOut();
    }
}
