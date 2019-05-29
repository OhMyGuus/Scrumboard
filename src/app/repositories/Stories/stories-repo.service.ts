import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Userstory } from 'src/app/models/userstory';
import { map, mergeAll, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BaseRepoService } from '../BaseRepo/base-repo.service';
import { IRepository } from '../IRepository';

@Injectable({
  providedIn: 'root'
})

export class StoriesRepoService extends BaseRepoService<Userstory> implements IRepository {
  constructor(private dbInj: AngularFirestore) {
    super(dbInj, 'stories');
  }

  observeStories(sprintID: string) {
   return this.observe().pipe(map(o => o.filter(story => story.sprintId === sprintID)));
  }

  createModel() {
    return new Userstory();
  }
}
