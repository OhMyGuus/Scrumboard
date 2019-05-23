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
  stories: Observable<Userstory[]>;
  sprint: Sprint;

  constructor(private route: ActivatedRoute, private sprintRepo: SprintsRepoService, private storyRepo: StoriesRepoService) {
    this.sprintId = this.route.snapshot.paramMap.get('id');
    console.log('details sprint: ', this.sprintId);
    this.initialize(this.sprintId);
    this.stories = this.storyRepo.observe();
  }

  initialize(id: string) {
    this.sprintRepo.get(this.sprintId).toPromise().then(o => {
      this.sprint = o;
      console.log('loaded: ', o);
    });
  this.storyRepo.observe().then(obj => {
    console.log(obj);
  });


  }

  ngOnInit() {
  }

}
