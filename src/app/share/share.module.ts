import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { ChatComponent } from './components/chat/chat.component';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import {ConversationComponent, ScrollToBottomDirective} from './components/chat/conversation/conversation.component';
import { InputTextComponent } from './components/chat/input-text/input-text.component';
import { ParticipantsComponent } from './components/participants/participants.component';

import { SocketIoModule} from 'ngx-socket-io';
import { SocketService } from './services/socket/socket.service';
import {MatButtonModule, MatCardModule, MatIconModule, MatTabsModule, MatTooltipModule} from '@angular/material';
import { ChatMessageComponent } from './components/chat/conversation/chat-message/chat-message.component';


@NgModule({
    declarations: [
        ChatComponent,
        BreadCrumbsComponent,
        ConversationComponent,
        InputTextComponent,
        ParticipantsComponent,
        ScrollToBottomDirective,
        ChatMessageComponent
    ],
    exports: [
        ChatComponent,
        BreadCrumbsComponent,
        ConversationComponent,
        InputTextComponent,
        ParticipantsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SocketIoModule,
        ReactiveFormsModule,
        FormsModule,
        MatTabsModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatCardModule
    ],
    providers: [
        SocketService
    ]
})
export class ShareModule { }
