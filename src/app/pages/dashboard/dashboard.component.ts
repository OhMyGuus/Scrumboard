import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoriesRepoService } from 'src/app/repositories/Stories/Stories-repo.service';
import { SprintsRepoService } from 'src/app/repositories/sprints/sprints-repo.service';
import { Sprint } from 'src/app/models/sprint';
import { Userstory } from 'src/app/models/userstory';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  sprint: Sprint;
  userstories: Userstory[] = [];
  constructor(private route: ActivatedRoute, private sprintRepo: SprintsRepoService, private storyRepo: StoriesRepoService) {
    sprintRepo.getActiveSprint().subscribe(o => this.sprint = o);
    this.userstories.push(new Userstory());
    this.userstories.push(new Userstory());

  }
  ngOnInit() {
  }

}

