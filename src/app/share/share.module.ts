import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { ChatComponent } from './components/chat/chat.component';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { ConversationComponent, ScrollToBottomDirective } from './components/chat/conversation/conversation.component';
import { InputTextComponent } from './components/chat/input-text/input-text.component';
import { ParticipantsComponent } from './components/participants/participants.component';

import { SocketIoModule } from 'ngx-socket-io';
import { SocketService } from './services/socket/socket.service';
import { MatButtonModule, MatCardModule, MatIconModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { MatBottomSheetModule, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

import { ChatMessageComponent } from './components/chat/conversation/chat-message/chat-message.component';
import { ColumnListComponent } from './components/column-list/column-list.component';
import { InternalContextContainerComponent, BottomContextSheetComponent } from './components/internal-context-container/internal-context-container.component';
import { ExternalContextsContainerComponent } from './components/external-contexts-container/external-contexts-container.component';
@NgModule({
    declarations: [
        ChatComponent,
        BreadCrumbsComponent,
        ConversationComponent,
        InputTextComponent,
        ParticipantsComponent,
        ScrollToBottomDirective,
        ChatMessageComponent,
        ColumnListComponent,
        InternalContextContainerComponent,
        ExternalContextsContainerComponent,
        BottomContextSheetComponent
    ],
    exports: [
        ChatComponent,
        BreadCrumbsComponent,
        ConversationComponent,
        InputTextComponent,
        ParticipantsComponent,
        ColumnListComponent,
        InternalContextContainerComponent,
        ExternalContextsContainerComponent,
        BottomContextSheetComponent
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
        MatCardModule,
        MatBottomSheetModule,
        MatListModule
    ],
    providers: [
        SocketService,
        { provide: MatBottomSheetRef, useValue: {} },
        { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} }
    ]
})
export class ShareModule { }
