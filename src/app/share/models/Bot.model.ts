import { IAuthor } from '../Interfaces/Author';
import { IItem } from './Item.model';
import { IRelation } from './Relation.model';

export interface ICommand {
    text: string
    description: string
    commandId: string
}
export interface INewItemCreation {
    text: string
    description: string
    itemTypeId: string
}
export interface IOntology {
    tags: IItem[]
    relations: IRelation[]
}

export enum BotStatus {
    offLine = 'offline',
    ready = 'ready',
    buy = 'buy'
}

export interface IEnrichData {
    command: ICommand[]
    create: INewItemCreation[],
    ontology: IOntology,
    status?: BotStatus
}

export class Bot implements IAuthor {
    _id: string;
    displayName: string;
    description?: string;
    avatar: string;
    personalSite: string;
    rootItem?: string;
    status?: BotStatus;
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
        this.status = bot && bot.status || BotStatus.offLine;
        this.route = bot && bot.route || '';
        this.commands = bot && bot.commands || [];
        this.questions = bot && bot.questions || [];
    }
}
