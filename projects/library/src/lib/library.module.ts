import { NgModule } from '@angular/core';
import { LibraryComponent } from './library.component';
import { RomanNumeralsPipe } from './roman/roman-numerals.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LibraryComponent, RomanNumeralsPipe],
  imports: [
    HttpClientModule
  ],
  exports: [LibraryComponent, RomanNumeralsPipe]
})
export class LibraryModule { }
