import { TestBed } from '@angular/core/testing';

import { ErgastService } from './ergast.service';

describe('ErgastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErgastService = TestBed.get(ErgastService);
    expect(service).toBeTruthy();
  });
});
