export interface IRelation {
    _id?: string;
    what: string;
    from: string;
    to: string;
    rate: number;
    authMarkers: string[];
}
export class Relation implements IRelation {
    _id?: string;
    what: string;
    from: string;
    to: string;
    rate: number;
    authMarkers: string[];
    constructor(obj?: any) {
        if (obj && obj._id) {
            this._id = obj._id;
        }
        this.what = obj && obj.what || '';
        this.from = obj && obj.from || '';
        this.to = obj && obj.to || '';
        this.rate = obj && obj.rate || 0.1;
        this.authMarkers = obj && obj.authMarkers || [];
    }
}
