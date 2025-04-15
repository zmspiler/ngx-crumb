import { TestBed } from '@angular/core/testing';

import { NgxCrumbService } from './ngx-crumb.service';

describe('NgxCrumbService', () => {
  let service: NgxCrumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCrumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
