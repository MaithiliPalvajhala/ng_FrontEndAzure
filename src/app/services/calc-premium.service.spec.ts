import { TestBed } from '@angular/core/testing';

import { CalcPremiumService } from './calc-premium.service';

describe('CalcPremiumService', () => {
  let service: CalcPremiumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcPremiumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
