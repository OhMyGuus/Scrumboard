import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoriesRepoService } from 'src/app/repositories/Stories/Stories-repo.service';
import { MockStoriesRepoService } from './service-mocks';

export const defaultbed = {
    declarations: [],
    imports: [
        BrowserModule, FormsModule
    ],
    providers: [
        { provide: StoriesRepoService, useClass: MockStoriesRepoService }
    ]
};
