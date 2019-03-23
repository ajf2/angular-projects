import { NgModule } from '@angular/core';
import { LibraryComponent } from './library.component';
import { RomanNumeralsPipe } from './roman/roman-numerals.pipe';

@NgModule({
  declarations: [LibraryComponent, RomanNumeralsPipe],
  imports: [
  ],
  exports: [LibraryComponent, RomanNumeralsPipe]
})
export class LibraryModule { }
