import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.css']
})
export class SignInDialogComponent implements OnInit {
    signInFormGroup: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<SignInDialogComponent>,
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.signInFormGroup = this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            password: ['', [
                Validators.required,
                // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
                Validators.pattern(RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'))
            ]]
        });
    }
    signIn() {
        const email: string = this.signInFormGroup.get('email').value;
        const password: string = this.signInFormGroup.get('password').value;
        this.authService.signIn(email, password).subscribe();
        this.dialogRef.close();
    }
    onCloseClick(): void {
        this.dialogRef.close();
    }

}
