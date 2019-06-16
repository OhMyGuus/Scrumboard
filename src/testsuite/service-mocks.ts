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

    update(story: Userstory) {

    }
}

export class MockSprintsRepoService {
    observe() {
        // return mocked storries
        return of([
            {}, {}
        ]);
    }
    remove(story: Userstory) {
        // remove story form mock
    }

    get() {
        return of([
            {}, {}
        ]);
    }

    getActiveSprint() {
        return of({});
    }
}

export class MockUsersRepoService {
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

