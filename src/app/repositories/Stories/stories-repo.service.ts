import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Userstory } from 'src/app/models/userstory';
import { map, mergeAll } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StoriesRepoService {

  private collection: AngularFirestoreCollection<Userstory>;

  constructor(private db: AngularFirestore) {
    this.collection = db.collection<Userstory>('Stories');
    this.log();
  }

  observe() {
    return this.collection.snapshotChanges().pipe(map(actions => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Userstory;
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

  add(story: Userstory) {
    console.log('Adding Stories: ', story);
    this.collection.add({ ...story });
  }

  remove(story: Userstory) {
    this.collection.doc(story.id).delete();
  }

  update(story: Userstory) {
    this.collection.doc(story.id).update(story);
  }
  
}
