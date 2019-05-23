import { Component, OnInit } from '@angular/core';
import { SprintsRepoService } from 'src/app/repositories/sprints/sprints-repo.service';
import { Observable } from 'rxjs';
import { Sprint } from 'src/app/models/sprint';

@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.scss']
})
export class SprintsComponent implements OnInit {

  sprints: Observable<Sprint[]>;
  constructor(private sprintsRepo: SprintsRepoService) {
    this.sprints = sprintsRepo.observe();
  }

  delete(sprint: Sprint) {
    console.log('delete', sprint);
    this.sprintsRepo.remove(sprint);
  }

  ngOnInit() {
  }

}
