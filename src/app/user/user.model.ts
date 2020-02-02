import {IAuthor} from '../share/Interfaces/Author';

export class User implements IAuthor {
    id?: string;
    displayName: string;
    email: string;
    firstName?: string;
    lastName?: string;
    avatar: string;

    constructor(obj?: any) {
        this.email = obj && obj.email || '';
        this.id = obj && obj.id;
        this.displayName = obj && obj.displayName || 'unknown';
        this.firstName = obj && obj.firstName;
        this.lastName = obj && obj.lastName;
        this.avatar = obj && obj.avatar || 'avatar.png';
    }
}
