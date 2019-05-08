import { User } from './user';
import { StoryStatus } from './storystatus';

export class Userstory {
    description: string;
    priority: number;
    points: number;
    users: User[];
    storystatus: StoryStatus;
}

