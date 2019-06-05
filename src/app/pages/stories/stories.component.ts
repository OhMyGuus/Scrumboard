import { Component, OnInit } from '@angular/core';
import { StoriesRepoService } from 'src/app/repositories/Stories/Stories-repo.service';
import { Userstory } from 'src/app/models/userstory';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  stories: Observable<Userstory[]>;

  constructor(private storiesRepo: StoriesRepoService) {}

  delete(story: Userstory) {
    console.log('delete', story);
    this.storiesRepo.remove(story);
  }

  ngOnInit() {
    this.stories = this.storiesRepo.observe();
  }

}
