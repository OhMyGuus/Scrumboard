import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Userstory } from 'src/app/models/userstory';
import { map, mergeAll } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BaseRepoService } from '../BaseRepo/base-repo.service';
import { IRepository } from '../IRepository';

@Injectable({
  providedIn: 'root'
})

export class StoriesRepoService extends BaseRepoService<Userstory> implements IRepository{
  constructor(private dbInj: AngularFirestore) {
    super(dbInj, 'stories');
  }

  createModel() {
    return new Userstory();
  }
}
