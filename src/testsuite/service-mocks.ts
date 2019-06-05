import { of } from 'rxjs';
import { Userstory } from 'src/app/models/userstory';


export class MockStoriesRepoService {
    observe() {
        // return mocked storries
        return of([
            {}, {}
        ]);
    }
    remove(story: Userstory) {
        // remove story form mock
    }
}
