import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoriesRepoService } from 'src/app/repositories/Stories/Stories-repo.service';
import { MockStoriesRepoService, MockSprintsRepoService, MockUsersRepoService } from './service-mocks';
import { RouterTestingModule } from '@angular/router/testing';
import { SprintsRepoService } from 'src/app/repositories/sprints/sprints-repo.service';
import { UsersRepoService } from 'src/app/repositories/users/users-repo.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxChartsModule } from '@swimlane/ngx-charts';

export const defaultbed = {
    declarations: [],
    imports: [
        BrowserModule, FormsModule, RouterTestingModule.withRoutes([]), DragDropModule, NgxChartsModule
    ],
    providers: [
        { provide: StoriesRepoService, useClass: MockStoriesRepoService },
        { provide: SprintsRepoService, useClass: MockSprintsRepoService },
        { provide: UsersRepoService, useClass: MockUsersRepoService }

    ]
};
