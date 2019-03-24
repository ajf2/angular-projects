import { Component, OnInit } from '@angular/core';
import { ErgastService } from 'projects/library/src/public-api';
import { Observable } from 'rxjs';
import { MotorRacingData } from 'projects/library/src/lib/ergast/motor-racing-data';

@Component({
  selector: 'sbx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sandbox';
  year = 1945;
  f1Data$: Observable<MotorRacingData>;

  constructor(public f1Service: ErgastService) { }

  ngOnInit(): void {
    this.f1Data$ = this.f1Service.currentSeason();
  }
}
