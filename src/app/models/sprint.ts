import { User } from './user';
import { IDbObject } from './interfaces/IDBObject';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

export class Sprint implements IDbObject {
    id?: string;
    description: string;
    startDate: Date;
    endDate: Date;
    active: boolean;

    static getStartDate(sprint: Sprint) {
        return Date.parse(`${sprint.startDate}`);
    }

    static  getEndDate(sprint: Sprint) {
        return Date.parse(`${sprint.endDate}`);
    }

    static getTotaldays(sprint: Sprint) {
        return Math.round(Math.floor(this.getEndDate(sprint) - this.getStartDate(sprint)) / 86400000);
    }

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