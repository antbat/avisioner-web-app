import { Component, OnInit } from '@angular/core';
import {Bot} from '../../../share/models/Bot.model';
import {ChatService} from '../../../share/services/chat/chat.service';
import {BotService} from '../../../share/services/bot/bot.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {

    bot: Bot;
    constructor() { }

    ngOnInit() {
        // this.botService.getBots().subscribe( (bots: Bot[]) => {
        //     this.bot = bots[0];
        //     this.chatService.setChatWithBot(this.bot);
        // });
    }
}
