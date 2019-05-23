import { User } from './user';
import { Sprint } from './sprint';
import { Userstory } from './userstory';
import { IDbObject } from './IDBObject';

export class Project implements IDbObject {
id?: string;
name: string;
description: string;
users: User[];
sprints: Sprint[];
backlog: Userstory[];
}
