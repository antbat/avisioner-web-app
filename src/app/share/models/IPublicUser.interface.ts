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
}
