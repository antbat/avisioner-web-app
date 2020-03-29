import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bot, IEnrichData, BotStatus } from '../../models/Bot.model';
import { HttpClient } from '@angular/common/http';
import { SpinnerService } from '../spinner/spinner.service';
import { map, tap } from 'rxjs/operators';
import { IContext } from '../../models/Context.model';
import { IItem } from '../../models/Item.model';
import { IRelation } from '../../models/Relation.model';

@Injectable({
    providedIn: 'root'
})
export class BotService {
    public myBots$ = new BehaviorSubject<Bot[]>([]);
    public enrichedData$ = new BehaviorSubject<Map<string, IEnrichData>>(null)
    public enrichedData = new Map<string, IEnrichData>();
    constructor(
        private http: HttpClient,
        @Inject('API_AUTH') private authApi: string,
        private spinner: SpinnerService
    ) {
        this.getBots().subscribe();
    }
    public getBots(): Observable<Bot[]> {
        const url = `${this.authApi}/user/myAvailableBots`;
        return this.http.get<Bot[]>(url).pipe(
            map(all => all.map(e => new Bot(e))),
            tap(bots => {
                // emit bots
                this.myBots$.next(bots);
                // enrich all bots
                bots.forEach(bot => {
                    this.enrichBotData(bot).subscribe(data => {
                        data.status = BotStatus.ready
                        this.enrichedData.set(bot._id, data)
                        this.enrichedData$.next(this.enrichedData)
                    });
                })
            })
        );
    }
    public enrichBotData(bot: Bot): Observable<IEnrichData> {
        const url = `${bot.personalSite}/enrich`;
        return this.http.get<IEnrichData>(url);
    }
    public getContext(bot: Bot): Observable<IContext> {
        const url = `${bot.personalSite}/context`;
        return this.http.get<IContext>(url);
    }
}
