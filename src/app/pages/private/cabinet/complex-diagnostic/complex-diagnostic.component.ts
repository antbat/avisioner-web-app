import {Component, OnInit} from '@angular/core';
import {Bot} from '../../../../share/models/Bot.model';
import {ChatService} from '../../../../share/services/chat/chat.service';
import {BotService} from '../../../../share/services/bot/bot.service';

@Component({
    selector: 'app-complex-diagnostic',
    templateUrl: './complex-diagnostic.component.html',
    styleUrls: ['./complex-diagnostic.component.css']
})
export class ComplexDiagnosticComponent implements OnInit {

    private readonly id = '5e4027757574c412d2898fc9';
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
                        this.chatService.setChatWithBot(this.bot);
                    }
                );
            }
        });
    }

}
