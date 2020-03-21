import { IBase } from './IBase';
import { IGroup } from './Group.model';
import { IPublicUser } from './IPublicUser.interface';

export interface IRoom extends IBase {
    name: string
    description: string
    group: string
    item: string
    externalContexts: string[]
}
export interface IRoomDetails {
    room: IRoom,
    group: IGroup,
    participants: IPublicUser[]
}
