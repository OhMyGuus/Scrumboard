import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoriesRepoService } from 'src/app/repositories/Stories/Stories-repo.service';
import { SprintsRepoService } from 'src/app/repositories/sprints/sprints-repo.service';
import { Observable } from 'rxjs';
import { Sprint } from 'src/app/models/sprint';
import { load } from '@angular/core/src/render3';
import { Userstory } from 'src/app/models/userstory';

@Component({
  selector: 'app-sprint-details',
  templateUrl: './sprint-details.component.html',
  styleUrls: ['./sprint-details.component.scss']
})
export class SprintDetailsComponent implements OnInit {

  sprintId: string;
  sprintObs: Observable<Sprint>;
  backlogStories: Userstory[] = new Array<Userstory>();
  sprintStories: Userstory[] = new Array<Userstory>();
  sprint: Sprint;

  constructor(private route: ActivatedRoute, private sprintRepo: SprintsRepoService, private storyRepo: StoriesRepoService) {
    this.sprintId = this.route.snapshot.paramMap.get('id');
    console.log('details sprint: ', this.sprintId);
    this.sprintObs = this.sprintRepo.get(this.sprintId);
    this.sprintObs.subscribe((o) => this.updateSprint(o));
    this.storyRepo.observe().subscribe((o) => this.updateStories(o));
  }

  updateSprint(sprint: Sprint) {
    this.sprint = sprint;
  }

  updateStories(stories: Userstory[]) {
    const backLog = [];
    const sprint = [];
    stories.forEach(story => {
      if (story.sprintId) {
        if (story.sprintId === this.sprintId) {
          sprint.push(story);
        }
      } else {
        backLog.push(story);
      }
    });
    this.backlogStories = backLog;
    this.sprintStories = sprint;

  }

  changeStory(story: Userstory) {
    if (story.sprintId) {
      story.sprintId = '';
    } else {
      story.sprintId = this.sprintId;
    }
    this.storyRepo.update(story);
  }

  ngOnInit() {
  }

}
