import { Userstory } from './userstory';
import { User } from './user';
import { IDbObject } from './IDBObject';

export class Sprint implements IDbObject {
    id?: string;
    description: string;
    userstories: Userstory[];
    startDate: Date;
    endDate: Date;
}
