import { User } from './user';
import { StoryStatus } from './storystatus';
import { IDbObject } from './interfaces/IDBObject';
import { FormlyFieldConfig } from '@ngx-formly/core';

export class Userstory implements IDbObject {
    id?: string;
    name: string;
    description: string;
    priority?: number;
    points?: number;
    userId: string;
    storystatus: StoryStatus = StoryStatus.backlog;
    sprintId?: string;
    index?: number;

    constructor() {
    }

    getForm(): FormlyFieldConfig[] {
        return [
            {
                key: 'name',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Name',
                    placeholder: 'Name',
                    required: true
                },
            },
            {
                key: 'description',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Description',
                    placeholder: 'Description',
                    required: true
                },
            }
        ];
    }

}

