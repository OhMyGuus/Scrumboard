import { User } from './user';
import { StoryStatus } from './storystatus';

export class Userstory {
    id?: string;
    name: string;
    description: string;
    priority?: number;
    points?: number;
    users?: User[];
    storystatus?: StoryStatus;
}

