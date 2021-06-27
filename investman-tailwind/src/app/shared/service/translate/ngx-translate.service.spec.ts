import { TestBed } from '@angular/core/testing';

import { NgxTranslateService } from './ngx-translate.service';

describe('NgxTranslateService', () => {
  let service: NgxTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
