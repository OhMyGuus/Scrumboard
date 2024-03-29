import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Project } from 'src/app/models/project';
import { BaseRepoService } from '../BaseRepo/base-repo.service';

@Injectable({
  providedIn: 'root'
})

export class ProjectRepoService extends BaseRepoService<Project> {
  constructor(private dbInj: AngularFirestore) {
    super(dbInj, 'projects');
  }

}
