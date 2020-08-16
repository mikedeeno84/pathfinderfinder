import { TestBed } from '@angular/core/testing';

import { GetFeatsService } from './get-feats.service';

describe('GetFeatsService', () => {
  let service: GetFeatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFeatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
