import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../../share/services/chat/chat.service';
import { Bot } from '../../../../share/models/Bot.model';
import { BotService } from '../../../../share/services/bot/bot.service';

@Component({
    selector: 'app-english-dictionary',
    templateUrl: './english-dictionary.component.html',
    styleUrls: ['./english-dictionary.component.css']
})
export class EnglishDictionaryComponent implements OnInit {

    private readonly id = '5e355482e413fb08e88f5208';
    bot: Bot;

    constructor(
        private chatService: ChatService,
        private botService: BotService
    ) {
    }

    ngOnInit() {
        this.botService.getBots().subscribe((bots: Bot[]) => {
            this.bot = bots.find(bot => bot._id === this.id);
            if (this.bot) {
                this.botService.enrichBotData(this.bot).subscribe(
                    enriched => {
                        this.bot.enrichFrom(enriched);
                        // this.chatService.setChatWithBot(this.bot);
                    }
                );
            }
        });
    }

}
