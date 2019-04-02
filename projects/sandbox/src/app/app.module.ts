import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryModule } from 'projects/library/src/public-api';
import { CorsTestComponent } from './cors-test/cors-test.component';

@NgModule({
  declarations: [
    AppComponent,
    CorsTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
