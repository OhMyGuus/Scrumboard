import { Userstory } from './userstory';
import { User } from './user';
import { IDbObject } from './interfaces/IDBObject';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

export class Sprint implements IDbObject {
    id?: string;
    description: string;
    userstories: Userstory[];
    startDate: Date;
    endDate: Date;
    active: boolean;

    getForm(): FormlyFieldConfig[] {
        return [
            {
                key: 'description',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Description',
                    placeholder: 'Description',
                    required: true
                },
            },
            {
                key: 'startDate',
                type: 'input',
                templateOptions: {
                    type: 'date',
                    label: 'Start date',
                    placeholder: 'Start date',
                    required: true
                }
            },
            {
                key: 'endDate',
                type: 'input',
                templateOptions: {
                    type: 'date',
                    label: 'End Date',
                    placeholder: 'End Date',
                    required: true
                },
                validators: {
                    endBeforeStart: {
                        expression: (control, data) => {
                            const startDate = data.model.startDate;
                            const endDate = control.value;
                            if (startDate > endDate || endDate < startDate) {
                                return false;
                            } else {
                                return true;
                            }
                        },
                        message: 'Dates not in range',
                    },
                },
            }
        ];
    }

}