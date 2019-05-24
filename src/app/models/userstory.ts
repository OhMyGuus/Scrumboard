import { User } from './user';
import { StoryStatus } from './storystatus';
import { IDbObject } from './IDBObject';

export class Userstory implements IDbObject {
    id?: string;
    name: string = 'story';
    description: string = 'desc';
    priority?: number;
    points?: number;
    userId: string;
    storystatus: StoryStatus = StoryStatus.backlog;
    sprintId?: string;
    index?: number;

    constructor() {
    }

}

