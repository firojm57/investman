import { TestBed } from '@angular/core/testing';

import { UrlInformationService } from './url-information.service';

describe('UrlInformationService', () => {
  let service: UrlInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
