import { TestBed } from '@angular/core/testing';

import { StoriesRepoService } from './Stories-repo.service';

describe('StoriesRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoriesRepoService = TestBed.get(StoriesRepoService);
    expect(service).toBeTruthy();
  });
});
