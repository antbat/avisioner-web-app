import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable } from 'rxjs';
import { Bot } from '../../models/Bot.model';
import {HttpClient} from '@angular/common/http';
import {SpinnerService} from '../../../spinner/spinner.service';
import { map, tap} from 'rxjs/operators';
import {IContext} from '../../models/Context.model';

@Injectable({
  providedIn: 'root'
})
export class BotService {
    private bots = new BehaviorSubject<Bot[]>([]);
    constructor(
        private http: HttpClient,
        @Inject('API_AUTH') private authApi: string,
        private spinner: SpinnerService
    ) {}
    public getBots(): Observable<Bot[]> {
        const url = `${this.authApi}/user/myAvailableBots`;
        return this.http.get<Bot[]>(url).pipe(
            map(all => all.map(e => new Bot(e))),
            tap( bots => this.bots.next(bots))
        );
    }
    public enrichBotData(bot: Bot): Observable<Bot>{
        const url = `${bot.personalSite}/enrich`;
        return this.http.get<Bot>(url);
    }
    public getContext(bot: Bot): Observable<IContext> {
        const url = `${bot.personalSite}/context`;
        return this.http.get<IContext>(url);
    }
}
