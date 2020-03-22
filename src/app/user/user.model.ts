import { IAuthor } from '../share/Interfaces/Author';

export enum TypeOfUser {
    human = 'human',
    robot = 'robot',
    server = 'server',
    admin = 'admin'
}
export interface IPublicUser {
    _id: string
    displayName: string
    email: string
    phone: string
    typeOfUser: TypeOfUser
    projection?: string
    avatar: string
}
export class User implements IPublicUser {
    _id: string
    displayName: string
    email: string
    phone: string
    typeOfUser: TypeOfUser
    projection?: string
    avatar: string

    constructor(obj?: any) {
        this._id = obj && obj._id;
        this.displayName = obj && obj.displayName || 'unknown';
        this.email = obj && obj.email || '';
        this.phone = obj && obj.phone || '';
        if (obj && obj.projection)
            this.projection = obj.projection;
        this.typeOfUser = obj && obj.typeOfUser || TypeOfUser.human;
        this.avatar = obj && obj.avatar || 'avatar.png';
    }
}
