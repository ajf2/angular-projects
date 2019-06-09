import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sbx-cors-test',
  templateUrl: './cors-test.component.html',
  styleUrls: ['./cors-test.component.scss']
})
export class CorsTestComponent implements OnInit {
  localProtocol = 'http';
  localPort = 80;
  localPath = ''
  remoteProtocol = 'https';
  remotePort = 443;
  remoteHost = '192.168.213.133';
  remotePath = 'CorsTestApi'

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  tryLocalGet() {
    this.http.get(`${this.localProtocol}://localhost:${this.localPort}/${this.localPath}/api/values/1`).subscribe(
      () => console.log('success'),
      () => console.log('fail')
    );
  }

  tryLocalPut() {
    this.http.put(`${this.localProtocol}://localhost:${this.localPort}/${this.localPath}/api/values/1`, '').subscribe(
      () => console.log('success'),
      () => console.log('fail')
    );
  }

  tryLocalPost() {
    this.http.post(`${this.localProtocol}://localhost:${this.localPort}/${this.localPath}/api/values/1`, '').subscribe(
      () => console.log('success'),
      () => console.log('fail')
    );
  }

  tryLocalDelete() {
    this.http.delete(`${this.localProtocol}://localhost:${this.localPort}/${this.localPath}/api/values/1`).subscribe(
      () => console.log('success'),
      () => console.log('fail')
    );
  }

  tryRemoteGet() {
    this.http.get(`${this.remoteProtocol}://${this.remoteHost}:${this.remotePort}/${this.remotePath}/api/values/1`).subscribe(
      () => console.log('success'),
      () => console.log('fail')
    );
  }

  tryRemotePut() {
    this.http.put(`${this.remoteProtocol}://${this.remoteHost}:${this.remotePort}/${this.remotePath}/api/values/1`, '').subscribe(
      () => console.log('success'),
      () => console.log('fail')
    );
  }

  tryRemotePost() {
    this.http.post(`${this.remoteProtocol}://${this.remoteHost}:${this.remotePort}/${this.remotePath}/api/values/1`, '').subscribe(
      () => console.log('success'),
      () => console.log('fail')
    );
  }

  tryRemoteDelete() {
    this.http.delete(`${this.remoteProtocol}://${this.remoteHost}:${this.remotePort}/${this.remotePath}/api/values/1`).subscribe(
      () => console.log('success'),
      () => console.log('fail')
    );
  }

}
