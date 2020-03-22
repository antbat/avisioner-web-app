import { Component, OnInit } from '@angular/core';
import { Bot } from '../../../../share/models/Bot.model';
import { ChatService } from '../../../../share/services/chat/chat.service';
import { BotService } from '../../../../share/services/bot/bot.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    bot: Bot;

    constructor(
        private chatService: ChatService,
        private botService: BotService
    ) { }

    ngOnInit() {
        this.botService.getBots().subscribe((bots: Bot[]) => {
            this.bot = bots[2];
            // this.chatService.setChatWithBot(this.bot);
        });
    }

}
