import { Component, OnInit } from '@angular/core';
import { BotService } from '../../../share/services/bot/bot.service';
import { Bot } from '../../../share/models/Bot.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-bots',
    templateUrl: './bots.component.html',
    styleUrls: ['./bots.component.css']
})
export class BotsComponent implements OnInit {
    bots$: Observable<Bot[]>;
    constructor(
        private botService: BotService
    ) { }
    ngOnInit() {
        this.bots$ = this.botService.myBots$
    }
}
