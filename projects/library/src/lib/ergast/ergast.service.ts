import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MotorRacingData } from './motor-racing-data';

@Injectable({
  providedIn: 'root'
})
export class ErgastService {
  private readonly baseUrl = 'https://ergast.com/api/f1';

  constructor(private http: HttpClient) { }

  private get<T>(urlSegment: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${urlSegment}.json`);
  }

  currentSeason(): Observable<MotorRacingData> {
    return this.get<MotorRacingData>('current');
  }
}
