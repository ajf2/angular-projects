import { RomanNumeralsPipe } from './roman-numerals.pipe';

describe('RomanNumeralsPipe', () => {
  it('creates an instance', () => {
    const pipe = new RomanNumeralsPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms 1997', () => {
    const pipe = new RomanNumeralsPipe();
    expect(pipe.transform(1997)).toBe('MCMXCVII');
  });
});
