import { TestBed } from '@angular/core/testing';

import { ErgastService } from './ergast.service';
import { HttpClient } from '@angular/common/http';

describe('ErgastService', () => {
  let service: ErgastService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        ErgastService,
        { provide: HttpClient, useValue: spy }
      ]
    });
    service = TestBed.get(ErgastService);
    httpSpy = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
