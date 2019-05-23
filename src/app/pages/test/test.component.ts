import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Project } from '../../models/project';
import { Observable } from 'rxjs';
import { ProjectRepoService } from '../../repositories/projects/project-repo.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})


export class TestComponent implements OnInit {
  projects: Observable<Project[]>;
  constructor(private projectRepo: ProjectRepoService) {
    this.projects = projectRepo.observe();
  }

  createProject() {
    const project = new Project();
    project.name = 'testing';
    this.projectRepo.add(project);
  }


  ngOnInit() {
  }

}
