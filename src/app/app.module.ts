import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserModule } from './user/user.module';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtInterceptor } from './user/interceptors/auth.interceptor';
import { ErrorInterceptor } from './user/interceptors/error401.interceptor';

import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AboutComponent } from './pages/public/about/about.component';
import { ForbiddenComponent } from './pages/public/forbidden/forbidden.component';
import { NotFoundComponent } from './pages/public/not-found/not-found.component';

import { BotsComponent } from './pages/private/my-bots/bots.component';
import { PrivateModule } from './pages/private/privatePage.module';
import { ShareModule } from './share/share.module';



@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ForbiddenComponent,
        NotFoundComponent,
        BotsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        UserModule,
        UserModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        PrivateModule,
        ShareModule,
        MatCardModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: 'API_AUTH', useValue: environment.API.auth },
        { provide: 'API_CHAT', useValue: environment.API.sockets },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
