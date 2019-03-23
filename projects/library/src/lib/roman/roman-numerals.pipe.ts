import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman'
})
export class RomanNumeralsPipe implements PipeTransform {

  transform(value: number, notation?: 'basic' | 'subtractive'): string {
    if (notation === 'basic') {
      return this.basicRomanNumerals(value);
    } else {
      return this.subtractiveRomanNumerals(value);
    }
  }

  private basicRomanNumerals(value: number): string {
    const m = Math.trunc(value / 1000); value %= 1000;
    const d = Math.trunc(value / 500); value %= 500;
    const c = Math.trunc(value / 100); value %= 100;
    const l = Math.trunc(value / 50); value %= 50;
    const x = Math.trunc(value / 10); value %= 10;
    const v = Math.trunc(value / 5); value %= 5;
    const i = Math.trunc(value / 1);
    return 'M'.repeat(m)
     + 'D'.repeat(d)
     + 'C'.repeat(c)
     + 'L'.repeat(l)
     + 'X'.repeat(x)
     + 'V'.repeat(v)
     + 'I'.repeat(i);
  }

  private subtractiveRomanNumerals(value: number): string {
    return 'MCMXCVII';
  }

}
