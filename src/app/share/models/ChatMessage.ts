export interface IAnswerOption {
    label: string;
    shortDescription: string;
    description: string;
    color: string;
}
export enum TypeofMessage {
    question = 'question',
    answer = 'answer',
    command = 'command',
    information = 'information',
    transfer = 'transfer'
}
export enum TypeOfUrlPointer {
    photo = 'photo',
    video = 'video',
    site = 'site',
    file = 'file'
}
export class ChatMessage {
    _id?: string;
    typeOfMessage: TypeofMessage;
    text: string;
    url?: string;
    typeOfUrl?: TypeOfUrlPointer;

    data?: any;

    room: string;
    itemReference?: string;
    author: string;
    shouldRead: string[];

    reaction?: any;
    affinity?: number;

    updatedAt: Date;
    createdAt: Date;

    status?: string;

    constructor(obj?: any) {

        if (obj && obj._id) {
            this._id = obj._id
        }
        this.typeOfMessage = obj && obj.typeOfMessage || TypeofMessage.question;
        this.text = obj && obj.text || '';

        this.url = obj && obj.url || '';
        this.typeOfUrl = obj && obj.typeOfUrl || TypeOfUrlPointer.photo;

        this.data = obj && obj.data || '';
        this.room = obj && obj.room || '';

        if (obj && obj.itemReference) {
            this.itemReference = obj.itemReference
        }

        this.shouldRead = obj && obj.shouldRead || [];
        this.reaction = obj && obj.reaction || [];
        this.affinity = obj && obj.affinity || 0;

        if (obj && obj.author) {
            this.author = obj && obj.author
        }
        this.updatedAt = obj && obj.updatedAt && new Date(obj.updatedAt) || new Date();
        this.createdAt = obj && obj.createdAt && new Date(obj.createdAt) || new Date();
    }
}
