import { Component } from '@angular/core';

@Component({
  selector: 'sbx-root',
  template: `
    <h1>{{title}}</h1>
    <p>Roman pipe: {{year}} = {{year | roman}}</p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'sandbox';
  year = 1945;
}
