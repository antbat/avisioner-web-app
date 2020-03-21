import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material';
import { SignInDialogComponent } from '../sign-in-dialog/sign-in-dialog.component';
import { SignUpDialogComponent } from '../sign-up-dialog/sign-up-dialog.component';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-status',
    templateUrl: './user-status.component.html',
    styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent implements OnInit {
    user: User;

    constructor(
        public authService: AuthService,
        public dialog: MatDialog,
        private route: Router
    ) { }
    ngOnInit() {
        this.authService.user.subscribe((user: User) => {
            this.user = user;
        });
    }
    signInDialog() {
        console.log('signIn');
        const dialogRef = this.dialog.open(SignInDialogComponent, {
            width: '350px'
        });
        dialogRef.afterClosed().subscribe(() => {
            this.route
                .navigate(['search'])
                .catch(err => console.log(err));
        });
    }
    signUpDialog() {
        console.log('signUp');
        const dialogRef = this.dialog.open(SignUpDialogComponent, {
            width: '450px'
        });
        dialogRef.afterClosed().subscribe(() => {
            this.route
                .navigate(['search'])
                .catch(err => console.log(err));
        });
    }

    signOut() {
        this.authService.logOut();
        this.route
            .navigate(['about'])
            .catch(err => console.log(err));
    }
}
