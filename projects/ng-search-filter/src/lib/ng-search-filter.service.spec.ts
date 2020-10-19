import { TestBed } from '@angular/core/testing';

import { NgSearchFilterService } from './ng-search-filter.service';

describe('NgSearchFilterService', () => {
  let service: NgSearchFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSearchFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
