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
import { ChatComponent } from './share/chat/chat.component';
import { BreadCrumbsComponent } from './share/bread-crumbs/bread-crumbs.component';
import { ConversationComponent } from './share/chat/conversation/conversation.component';
import { InputTextComponent } from './share/chat/input-text/input-text.component';
import { NotesComponent } from './pages/private/cabinet/notes/notes.component';
import { EnglishDictionaryComponent } from './pages/private/cabinet/english-dictionary/english-dictionary.component';
import { ContactsComponent } from './pages/private/cabinet/contacts/contacts.component';
import { PersonalComponent } from './pages/private/cabinet/personal/personal.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ForbiddenComponent,
        NotFoundComponent,
        CabinetComponent,
        ChatComponent,
        BreadCrumbsComponent,
        ConversationComponent,
        InputTextComponent,
        NotesComponent,
        EnglishDictionaryComponent,
        ContactsComponent,
        PersonalComponent
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
