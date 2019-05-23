import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Userstory } from 'src/app/models/userstory';
import { map, mergeAll } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IDbObject } from 'src/app/models/IDBObject';
import { BaseRepoService } from '../BaseRepo/base-repo.service';
import { Sprint } from 'src/app/models/sprint';

@Injectable({
  providedIn: 'root'
})

export class SprintsRepoService extends BaseRepoService<Sprint> {
  constructor(private dbInj: AngularFirestore) {
    super(dbInj, 'sprints');
  }
}
