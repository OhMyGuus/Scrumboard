import { IDbObject } from './IDBObject';

export class User implements IDbObject {
    id?: string;
    name: string;

    constructor() {

    }
}
