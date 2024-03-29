import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Userstory } from 'src/app/models/userstory';
import { map, mergeAll } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BaseRepoService } from '../BaseRepo/base-repo.service';
import { Sprint } from 'src/app/models/sprint';
import { IRepository } from '../IRepository';

@Injectable({
  providedIn: 'root'
})

export class SprintsRepoService extends BaseRepoService<Sprint> implements IRepository {

  constructor(private dbInj: AngularFirestore) {
    super(dbInj, 'sprints');
  }

  setActiveSprint(sprint: Sprint) {
    this.getAll().toPromise().then(sprints => {
      sprints.forEach(o => {
        o.active = o.id === sprint.id;
        this.update(o);
      });
    });
  }

  getActiveSprint() {
    return this.observe().pipe(map((o) => {
      return o.find((b => b.active));
    }));
  }

  createModel() {
    return new Sprint();
  }

}

