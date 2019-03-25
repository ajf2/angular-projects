import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErgastService } from './ergast.service';
import { MotorRacingData } from './motor-racing-data';

describe('ErgastService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ErgastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ErgastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Observable<MRData> and be called once', () => {
    const mockData: MotorRacingData = {
      MRData: {
        RaceTable: {
          Races: [],
          season: 0
        },
        limit: 0,
        offset: 0,
        series: '',
        total: 0,
        url: '',
        xmlns: ''
      }
    };
    service.currentSeason().subscribe(data => expect(data).toEqual(mockData));
    // I don't really understand the following yet, but adapted it from the Angular Guide.
    // https://angular.io/guide/http#testing-http-requests
    const req = httpTestingController.expectOne('https://ergast.com/api/f1/current.json');
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
    httpTestingController.verify();
  });
});
