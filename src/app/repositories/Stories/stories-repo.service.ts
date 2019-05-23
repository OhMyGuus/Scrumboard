import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Userstory } from 'src/app/models/userstory';
import { map, mergeAll } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IDbObject } from 'src/app/models/IDBObject';
import { BaseRepoService } from '../BaseRepo/base-repo.service';

@Injectable({
  providedIn: 'root'
})

export class StoriesRepoService extends BaseRepoService<Userstory> {
  constructor(private dbInj: AngularFirestore) {
    super(dbInj, 'stories');
  }
}
