import { TestBed } from '@angular/core/testing';

import { GetCatsService } from './get-cats.service';

describe('GetCatsService', () => {
  let service: GetCatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
