import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoriesRepoService } from 'src/app/repositories/Stories/Stories-repo.service';
import { SprintsRepoService } from 'src/app/repositories/sprints/sprints-repo.service';
import { Sprint } from 'src/app/models/sprint';
import { Userstory } from 'src/app/models/userstory';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersRepoService } from 'src/app/repositories/users/users-repo.service';
import { map, filter } from 'rxjs/operators';
import { StoryStatus, GetStatusses } from 'src/app/models/storystatus';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  sprint: Sprint;
  userstories: Userstory[] = [];
  users: Observable<User[]>;
  statusses: string[];
  constructor(
    private route: ActivatedRoute,
    private sprintRepo: SprintsRepoService,
    private storyRepo: StoriesRepoService,
    private userRepo: UsersRepoService) {
    sprintRepo.getActiveSprint().subscribe(o => this.sprint = o);
    this.users = userRepo.observe();
    storyRepo.observe().subscribe(o => this.userstories = o);
    this.statusses = GetStatusses();
  }

  drop(event, state: string, user) {
    const story = event.item.data as Userstory;
    if (story) {
      story.storystatus = StoryStatus[state];
      story.index = event.currentIndex;
      story.userId = user ? user.id : '';
      if (story.storystatus === StoryStatus.Done) {
        story.doneDate = new Date();

      } else {
        story.doneDate = null;
      }
      this.storyRepo.update(story);
    }
  }

  getUserStories(user, state) {
    return this.userstories.filter(o => o.sprintId === this.sprint.id
      && (!state && (!o.storystatus || o.storystatus === StoryStatus.backlog)
        || (o.storystatus === StoryStatus[state] && user.id === o.userId))).sort((o, b) => o.index > b.index ? 1 : 0);
  }

  ngOnInit() {
  }

}

