import { TestBed } from '@angular/core/testing';

import { OfferingSearchService } from './offering-search.service';

describe('OfferingSearchService', () => {
  let service: OfferingSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferingSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
