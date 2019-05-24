import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { map, mergeAll } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IDbObject } from 'src/app/models/interfaces/IDBObject';

@Injectable({
  providedIn: 'root'
})

export class BaseRepoService<T extends IDbObject> {

  private collection: AngularFirestoreCollection;
  constructor(private db: AngularFirestore, dbName: string) {
    this.collection = this.db.collection<T>(dbName);
    this.log();
  }

  getAll() {
    return this.collection.get().pipe(map((querySnapshot) => {
      return querySnapshot.docs.map((b) => {
        const data = b.data() as T;
        data.id = b.id;
        return data;
      });
    }));
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

  get(id: string) {
    return this.collection.doc(id).get().pipe(map((a) => {
      const data = a.data() as T;
      data.id = a.id;
      return data;
    }));
  }

  observeObj(id: string) {
    return this.collection.doc(id).snapshotChanges().pipe(map((a) => {
      const data = a.payload.data() as T;
      data.id = a.payload.id;
      return data;
    }));
  }

  add(obj: T) {
    this.collection.add({ ...obj });
  }

  remove(obj: T) {
    this.collection.doc(obj.id).delete();
  }

  update(obj: T) {
    console.log('UpdateObj ', obj);
    this.collection.doc(obj.id).update(obj);
  }
}
