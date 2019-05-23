import { User } from './user';
import { StoryStatus } from './storystatus';
import { IDbObject } from './IDBObject';

export class Userstory implements IDbObject {
    id?: string;
    name: string;
    description: string;
    priority?: number;
    points?: number;
    users?: User[];
    storystatus?: StoryStatus;
    sprintId?: string;

    constructor() {
    }

}

