import { User } from './user';
import { Sprint } from './sprint';
import { Userstory } from './userstory';

export class Project {
name: string;
description: string;
users: User[];
sprints: Sprint[];
backlog: Userstory[];
}
