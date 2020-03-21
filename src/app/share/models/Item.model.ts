export enum TypeOfItem {
    text = 'text',
    number = 'number',
    boolean = 'boolean',
    date = 'date',
    currency = 'currency',
    img = 'img',
    video = 'video',
    geo = 'geo',
    technical = 'technical',
    context = 'context',
    projection = 'projection' // for users, for groups,
}
export interface IItem {
    _id?: string;
    name: string;
    description: string;
    typeOfItem: TypeOfItem;
    tuple?: string[];
    authMarkers: string[];
    previousVersionOf?: string;
    data?: any;
}
export class Item implements IItem {
    // tslint:disable-next-line:variable-name
    _id?: string
    name: string
    description: string
    typeOfItem: TypeOfItem
    authMarkers: string[]
    constructor(obj?: any) {
        this._id = (obj && obj._id) || ';'
        this.name = (obj && obj.name) || ''
        this.description = (obj && obj.description) || ''
        this.typeOfItem = (obj && obj.typeOfItem) || TypeOfItem.text
        this.authMarkers = (obj && obj.authMarkers) || []
    }
}
