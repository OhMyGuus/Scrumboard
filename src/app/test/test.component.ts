import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProjectRepoService } from '../repository/project-repo.service';
import { Project } from '../models/project';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})


export class TestComponent implements OnInit {
  projects: Observable<Project>;
  
  constructor(private projectRepo: ProjectRepoService) {
    console.log(projectRepo.getAll());
    projectRepo.onChange(console.log);
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
