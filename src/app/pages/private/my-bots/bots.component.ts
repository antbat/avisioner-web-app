import { Component, OnInit } from '@angular/core';
import {BotService} from '../../../share/services/bot/bot.service';
import {Bot} from '../../../share/models/Bot.model';

@Component({
  selector: 'app-bots',
  templateUrl: './bots.component.html',
  styleUrls: ['./bots.component.css']
})
export class BotsComponent implements OnInit {
    bots: Bot[];
    constructor(
        private botService: BotService
    ) { }
    ngOnInit() {
        this.botService
            .getBots()
            .subscribe( (bots: Bot[]) => {
                this.bots = bots;
                this.bots.forEach( bot => {
                    this.botService.enrichBotData(bot).subscribe(
                        enriched => bot.enrichFrom(enriched)
                    )
                });
            });
    }
}
