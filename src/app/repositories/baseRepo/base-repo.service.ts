import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { map, mergeAll } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IDbObject } from 'src/app/models/IDBObject';

@Injectable({
  providedIn: 'root'
})

export class BaseRepoService<T extends IDbObject> {

  private collection: AngularFirestoreCollection;
  constructor(private db: AngularFirestore, dbName: string) {
    this.collection = this.db.collection<T>(dbName);
    this.log();
  }

  observe() {
    return this.collection.snapshotChanges().pipe(map(actions => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as T;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  onChange(func) {
    this.observe().subscribe(func);
  }

  log() {
    this.observe().subscribe((obj) => console.log(obj));
  }

  add(obj: T) {
    this.collection.add({ ...obj });
  }

  remove(obj: T) {
    this.collection.doc(obj.id).delete();
  }

  update(obj: T) {
    this.collection.doc(obj.id).update(obj);
  }
}

