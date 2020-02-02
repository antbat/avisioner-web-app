import {IAuthor} from '../Interfaces/Author';

export class ChatMessage {
    text: string;
    author?: IAuthor;
    item: string;
    updated: Date;
    created: Date;
    constructor(obj?: any) {
        this.text = obj && obj.text || '';
        this.item = obj && obj.item || '';
        this.updated = obj && new Date(obj.updated) || new Date();
        this.created = obj && new Date(obj.created) || new Date();
    }
}
