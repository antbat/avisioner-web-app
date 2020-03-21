import { IBase } from './IBase';

export enum TypeOfGroup {
    myFriends = 'myFriends',
    myRobots = 'myRobots',
    individual = 'individual',
    regular = 'regular'
}

export interface IGroup extends IBase {
    name: string
    typeOfGroup: TypeOfGroup
    description?: string
    agreement?: string
    logo?: string
    projection?: string
}
