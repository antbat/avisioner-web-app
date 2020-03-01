import {IItem} from './Item.model';
import {IRelation} from './Relation.model'

export interface IContext {
    item: IItem[],
    relations: IRelation[]
}
