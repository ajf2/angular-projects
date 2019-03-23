import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErgastService {
  private readonly baseUrl = 'https://ergast.com/api/f1/';
  private season = 2009;
  private round = 12;

  constructor(private http: HttpClient) { }

  currentSeason(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/current`);
  }
}
