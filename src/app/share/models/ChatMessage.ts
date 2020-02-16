export interface IAnswerOption {
    label: string;
    shortDescription: string;
    description: string;
    color: string;
}
export enum TypeofMessage {
    question = 'question',
    answer = 'answer',
    command = 'command'
}
export enum TypeOfUrlPointer {
    photo = 'photo',
    video = 'video',
    site = 'site',
    file = 'file'
}
export class ChatMessage {
    typeOfMessage: TypeofMessage;
    text: string;

    url: string;
    typeOfUrl: TypeOfUrlPointer;

    data: any;

    rootItem: string;
    item: string;
    author?: string;

    updatedAt: Date;
    createdAt: Date;

    constructor(obj?: any) {
        this.typeOfMessage = obj && obj.typeOfMessage || TypeofMessage.question;
        this.text = obj && obj.text || '';

        this.url = obj && obj.url || '';
        this.typeOfUrl = obj && obj.typeOfUrl || TypeOfUrlPointer.photo;

        this.data = obj && obj.data || '';
        this.rootItem = obj && obj.rootItem || '';
        this.item = obj && obj.item || '';

        if (obj && obj.author) {
            this.author = obj && obj.author
        }
        this.updatedAt = obj && new Date(obj.updatedAt) || new Date();
        this.createdAt = obj && new Date(obj.createdAt) || new Date();
    }
}
