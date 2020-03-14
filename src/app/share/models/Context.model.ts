import {IItem} from './Item.model';
import {IRelation} from './Relation.model'

export interface IContext {
    items: IItem[],
    relations: IRelation[]
}
