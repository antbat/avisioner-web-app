import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserModule } from './user/user.module';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {JwtInterceptor} from './user/interceptors/auth.interceptor';
import {ErrorInterceptor} from './user/interceptors/error401.interceptor';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AboutComponent } from './pages/public/about/about.component';
import { ForbiddenComponent } from './pages/public/forbidden/forbidden.component';
import { NotFoundComponent } from './pages/public/not-found/not-found.component';
import { CabinetComponent } from './pages/private/cabinet/cabinet.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ForbiddenComponent,
        NotFoundComponent,
        CabinetComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        UserModule,
        MatSnackBarModule,
        MatProgressSpinnerModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: 'API_AUTH', useValue: environment.API.auth },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
