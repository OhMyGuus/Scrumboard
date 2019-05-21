import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Project } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectRepoService {

  private changeHandler;
  private collection;

  constructor(private db: AngularFirestore) {
    this.collection = db.collection<Project>('project');
    this.changeHandler = this.collection.valueChanges();

  }

  observe(){
    return this.changeHandler;
  }

  onChange(func) {
    return this.changeHandler.subscribe(func);
  }

  getAll() {
    // this.db.collection('board').get().subscribe(console.log("dfdfd"));
    }

  add(project: Project) {
    console.log('Adding project: ', project);
    this.collection.add({...project});
  }
}
