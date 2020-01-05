import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MatStepper} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';

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
        private formBuilder: FormBuilder
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
            error => {
                console.log(error);
            }
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
            error => {
                console.log(error);
            }
        );
    }
    signUp() {
        const displayName: string = this.passwordFormGroup.get('displayName').value;
        const password: string = this.passwordFormGroup.get('password').value;
        this.authService.signUp(displayName, password).subscribe(
            data => {
                console.log(data);
                this.dialogRef.close();
            },
            error => {
                console.log(error);
            }
        );
    }
    onCloseClick(): void {
        this.dialogRef.close();
    }

}
