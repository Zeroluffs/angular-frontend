import { TestBed } from '@angular/core/testing';

import { FavImagesService } from './fav-images.service';

describe('FavImagesService', () => {
  let service: FavImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
