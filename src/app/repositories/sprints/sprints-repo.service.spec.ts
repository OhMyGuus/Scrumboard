import { TestBed } from '@angular/core/testing';

import { SprintsRepoService } from './sprints-repo.service';

describe('SprintsRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SprintsRepoService = TestBed.get(SprintsRepoService);
    expect(service).toBeTruthy();
  });
});
