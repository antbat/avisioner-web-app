import { IAuthor } from '../Interfaces/Author';

export enum IBotStatus {
    offLine = 'offline',
    ready = 'ready',
    buy = 'buy'
}

export class Bot implements IAuthor {
    _id: string;
    displayName: string;
    description?: string;
    avatar: string;
    personalSite: string;
    rootItem?: string;
    status?: IBotStatus;
    route?: string;
    commands: string[] = [];
    questions: string[] = [];

    constructor(obj?: any) {
        this._id = obj && obj._id || '';
        this.displayName = obj && obj.displayName || '';
        this.description = obj && obj.description || '';
        this.rootItem = obj && obj.rootItem || '';
        this.avatar = obj && obj.avatar || '';
        this.personalSite = obj && obj.personalSite || '';
    }
    enrichFrom(bot: Bot) {
        this.rootItem = bot && bot.rootItem || '';
        this.status = bot && bot.status || IBotStatus.offLine;
        this.route = bot && bot.route || '';
        this.commands = bot && bot.commands || [];
        this.questions = bot && bot.questions || [];
    }
}
