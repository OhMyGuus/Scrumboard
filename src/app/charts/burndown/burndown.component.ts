import { Component, OnInit, Input } from '@angular/core';
import { Sprint } from 'src/app/models/sprint';
import { StoriesRepoService } from 'src/app/repositories/Stories/Stories-repo.service';
import { Userstory } from 'src/app/models/userstory';
import { StoryStatus } from 'src/app/models/storystatus';


@Component({
  selector: 'app-burndown',
  templateUrl: './burndown.component.html',
  styleUrls: ['./burndown.component.scss']
})


export class BurndownComponent implements OnInit {

  @Input() sprint: Sprint;
  userstories: Userstory[] = [];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Dagen';
  showYAxisLabel = true;
  yAxisLabel = 'Punten';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  multi: any[] = [];

  constructor(private storyRepo: StoriesRepoService) {

  }

  fillChart() {
    this.multi = [];
    const totalDays = Sprint.getTotaldays(this.sprint);
    const storiesCount = this.userstories.length;
    this.multi.push(
      {
        name: 'Gewenst',
        series: [
          {
            name: this.getDate(0),
            value: storiesCount
          },
          {
            name: this.getDate(totalDays),
            value: 0
          }
        ]
      }
    );
    const burndown = {
      name: 'Burndown',
      series: []
    };
    for (let i = 0; i <= totalDays; i++) {
      burndown.series.push({
        name: this.getDate(i),
        value: this.getFinished(i, storiesCount)
      });
    }
    this.multi.push(burndown);

    console.log('FILLING CHART: ', this.userstories, 'days', totalDays);

  }

  getDate(i: number) {
    const date = new Date(Sprint.getStartDate(this.sprint));
    date.setDate(date.getDate() + i);
    return date;

  }

  getFinished(day: number, total: number) {
    let count = total;
    for (const story of this.userstories) {
      if (story.doneDate && story.storystatus === StoryStatus.Done) {
        const dayNr = Math.round(Math.floor(Userstory.getDoneDate(story) - Sprint.getStartDate(this.sprint)) / 86400000);
        if (dayNr <= day) {
          count--;
        }
      }
    }
    return count;
  }

  ngOnInit() {
    this.storyRepo.observeStories(this.sprint.id).subscribe(o => { this.userstories = o; this.fillChart(); });
  }

}
