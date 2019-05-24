import { IDbObject } from './interfaces/IDBObject';
import { FormlyFieldConfig } from '@ngx-formly/core';

export class User implements IDbObject {
    id?: string;
    name: string;
    role: string;
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
                key: 'role',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Role',
                    placeholder: 'Role',
                    required: true
                },
            }
        ];
    }
}


