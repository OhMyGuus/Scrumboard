import { FormlyFieldConfig } from '@ngx-formly/core';

export interface IDbObject {
    id?: string;
    getForm?(): FormlyFieldConfig[];

}
