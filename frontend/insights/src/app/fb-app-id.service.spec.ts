import { TestBed } from '@angular/core/testing';

import { FbAppIdService } from './fb-app-id.service';

describe('FbAppIdService', () => {
  let service: FbAppIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbAppIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
