import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sbx-cors-test',
  templateUrl: './cors-test.component.html',
  styleUrls: ['./cors-test.component.scss']
})
export class CorsTestComponent implements OnInit {
  thisServerUrl = 'http://192.168.213.132/CorsTestApi/api';
  crossOriginServerUrl = 'http://192.168.213.133/CorsTestApi/api';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  tryGet() {
    this.http.get(`${this.thisServerUrl}/values/1`).subscribe(
      () => console.log('success'),
      () => console.log('fail')
    )
  }

  tryCrossOriginGet() {
    this.http.get(`${this.crossOriginServerUrl}/values/1`).subscribe(
      () => console.log('success'),
      () => console.log('fail')
    )
  }

  tryPut() {
    this.http.put(`${this.thisServerUrl}/values/1`, '').subscribe(
      () => console.log('success'),
      () => console.log('fail')
    )
  }

  tryCrossOriginPut() {
    this.http.put(`${this.crossOriginServerUrl}/values/1`, '').subscribe(
      () => console.log('success'),
      () => console.log('fail')
    )
  }

  tryPost() {
    this.http.post(`${this.thisServerUrl}/values`, '').subscribe(
      () => console.log('success'),
      () => console.log('fail')
    )
  }

  tryCrossOriginPost() {
    this.http.post(`${this.crossOriginServerUrl}/values`, '').subscribe(
      () => console.log('success'),
      () => console.log('fail')
    )
  }

  tryDelete() {
    this.http.delete(`${this.thisServerUrl}/values/1`).subscribe(
      () => console.log('success'),
      () => console.log('fail')
    )
  }

  tryCrossOriginDelete() {
    this.http.delete(`${this.crossOriginServerUrl}/values/1`).subscribe(
      () => console.log('success'),
      () => console.log('fail')
    )
  }

}
