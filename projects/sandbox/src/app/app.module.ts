import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryModule } from 'projects/library/src/public-api';
import { CorsTestComponent } from './cors-test/cors-test.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddApiKeyInterceptor } from 'projects/library/src/lib/http/add-api-key-interceptor';

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
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AddApiKeyInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
