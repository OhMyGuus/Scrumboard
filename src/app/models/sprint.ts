import { Userstory } from './userstory';
import { User } from './user';

export class Sprint {
    description: string;
    userstories: Userstory[];
    startDate: Date;
    endDate: Date;
}
