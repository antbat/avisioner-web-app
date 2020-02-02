import { Component, OnInit } from '@angular/core';
import {Bot} from '../../../../share/models/Bot.model';
import {ChatService} from '../../../../share/services/chat/chat.service';
import {BotService} from '../../../../share/services/bot/bot.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

    bot: Bot;

    constructor(
        private chatService: ChatService,
        private botService: BotService
    ) { }

    ngOnInit() {
        this.botService.getBots().subscribe( (bots: Bot[]) => {
            this.bot = bots[3];
            this.chatService.setChatWithBot(this.bot);
        });
    }
}
