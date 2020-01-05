import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MatStepper} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {NotifyUserService} from '../../NotifyBySnackBars/notify-user.service';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.css']
})
export class SignUpDialogComponent implements OnInit {

    emailFormGroup: FormGroup;
    confirmFormGroup: FormGroup;
    passwordFormGroup: FormGroup;

    constructor(
        private authService: AuthService,
        public dialogRef: MatDialogRef<SignUpDialogComponent>,
        private formBuilder: FormBuilder,
        private notifyUserService: NotifyUserService
    ) { }

    ngOnInit() {
        this.emailFormGroup = this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]],
        });
        this.confirmFormGroup = this.formBuilder.group({
            emailCode: ['', [
                Validators.required,
                Validators.pattern(RegExp('[0-9]{6}'))
            ]],
        });
        this.passwordFormGroup = this.formBuilder.group({
            displayName: ['', [
                Validators.required,
                Validators.minLength(2)
            ]],
            password: ['', [
                Validators.required,
                // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
                Validators.pattern(RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'))
            ]],
            passwordConfirmation: ['', [
                Validators.required,
                // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
                Validators.pattern(RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'))
            ]]
        });
    }

    sendEmail(stepper: MatStepper) {
        const email: string = this.emailFormGroup.get('email').value;
        this.authService.sendPinCodeToEmail(email).subscribe(
            data => {
                console.log(data);
                stepper.next();
            },
            message => this.notifyUserService.notify(message, 30)
        );
    }
    verifyEmail(stepper: MatStepper) {
        const code: string = this.confirmFormGroup.get('emailCode').value;
        const email: string = this.emailFormGroup.get('email').value;

        this.authService.verifyEmailByCode(code, email).subscribe(
            data => {
                console.log(data);
                stepper.next();
            },
            message => this.notifyUserService.notify(message, 30)
        );
    }
    signUp() {
        const displayName: string = this.passwordFormGroup.get('displayName').value;
        const password: string = this.passwordFormGroup.get('password').value;
        this.authService.signUp(displayName, password).subscribe(
            () => {
                this.notifyUserService.notify('you have successfully signed up', 6);
                this.dialogRef.close();
            },
            message => this.notifyUserService.notify(message, 30)
        );
    }
    onCloseClick(): void {
        this.dialogRef.close();
    }

}
