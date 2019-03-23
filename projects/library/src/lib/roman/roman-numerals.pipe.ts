import { Pipe, PipeTransform } from '@angular/core';

/**
 * Converts a number into Roman numerals.
 */
@Pipe({
  name: 'roman'
})
export class RomanNumeralsPipe implements PipeTransform {

  /**
   * Converts a number into Roman numerals. Only supports positive integers.
   * @param value The number to convert.
   * @param notation Use either basic (e.g. VIIII) or subtractive (e.g. IX) notation.
   * Subtractive is the default.
   */
  transform(value: number, notation?: 'basic' | 'subtractive'): string {
    if (value > 3999) {
      throw new Error('RomanNumeralsPipe cannot convert numbers over 3,999.');
    }
    if (value < 0) {
      throw new Error('RomanNumeralsPipe cannot convert negative numbers.');
    }
    if (value === 0) {
      throw new Error('RomanNumeralsPipe cannot convert zero.');
    }
    if (!Number.isInteger(value)) {
      throw new Error('RomanNumeralsPipe cannot convert fractional numbers.');
    }
    if (notation === 'basic') {
      return this.basicRomanNumerals(value);
    } else {
      return this.subtractiveRomanNumerals(value);
    }
  }

  /**
   * Converts a number into basic notation Roman numerals.
   * @param value The number to convert.
   */
  private basicRomanNumerals(value: number): string {
    // Starting with the most significant, count the amount of times each letter is required
    // by dividing and using Math.trunc to discard the decimal points.
    // Then use modulo to calculate the remainder and pass that on to the next letter by updating value.
    const m = Math.trunc(value / 1000); value %= 1000;
    const d = Math.trunc(value / 500); value %= 500;
    const c = Math.trunc(value / 100); value %= 100;
    const l = Math.trunc(value / 50); value %= 50;
    const x = Math.trunc(value / 10); value %= 10;
    const v = Math.trunc(value / 5); value %= 5;
    const i = Math.trunc(value / 1);
    // Use String.repeat to return letters the appropriate number of times.
    return 'M'.repeat(m)
      + 'D'.repeat(d)
      + 'C'.repeat(c)
      + 'L'.repeat(l)
      + 'X'.repeat(x)
      + 'V'.repeat(v)
      + 'I'.repeat(i);
  }

  /**
   * Converts a number into subtractive notation Roman numerals.
   * @param value The number to convert.
   */
  private subtractiveRomanNumerals(value: number): string {
    // Starting with the most significant,
    // replace longer strings with their subtractive equivalents.
    return this.basicRomanNumerals(value)
      .replace('DCCCC', 'CM')
      .replace('CCCC', 'CD')
      .replace('LXXXX', 'XC')
      .replace('XXXX', 'XL')
      .replace('VIIII', 'IX')
      .replace('IIII', 'IV');
  }
}
