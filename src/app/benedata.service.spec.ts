import { TestBed } from '@angular/core/testing';

import { BenedataService } from './benedata.service';

describe('BenedataService', () => {
  let service: BenedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
