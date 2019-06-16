import { TestBed } from '@angular/core/testing';

import { BaseRepoService } from './base-repo.service';
import { IDbObject } from 'src/app/models/interfaces/IDBObject';

describe('BaseRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseRepoService<IDbObject> = TestBed.get(BaseRepoService);
    expect(service).toBeTruthy();
  });
});
