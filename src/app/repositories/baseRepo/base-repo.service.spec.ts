import { TestBed } from '@angular/core/testing';

import { IDbObject } from 'src/app/models/IDBObject';
import { BaseRepoService } from './base-repo.service';

describe('BaseRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseRepoService<IDbObject> = TestBed.get(BaseRepoService);
    expect(service).toBeTruthy();
  });
});
