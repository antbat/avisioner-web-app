export class User {
    id?: string;
    displayName?: string;
    email: string;
    firstName?: string;
    lastName?: string;

    constructor(obj?: any) {
        this.email = obj && obj.email || '';
        this.id = obj && obj.id;
        this.displayName = obj && obj.displayName;
        this.firstName = obj && obj.firstName;
        this.lastName = obj && obj.lastName;
    }
}
