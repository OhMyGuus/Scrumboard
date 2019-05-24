import { IDbObject } from '../models/interfaces/IDBObject';

export interface IRepository {
    getAll();
    observe();
    onChange(func);
    log();
    get(id: string);
    observeObj(id: string);
    add(obj: IDbObject);
    remove(obj: IDbObject);
    update(obj: IDbObject);
    createModel(): IDbObject;
}
