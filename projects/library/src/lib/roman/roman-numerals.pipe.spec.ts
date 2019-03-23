import { RomanNumeralsPipe } from './roman-numerals.pipe';

describe('RomanNumeralsPipe', () => {
  const pipe = new RomanNumeralsPipe();

  it('creates an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms 1997', () => {
    expect(pipe.transform(1997)).toBe('MCMXCVII');
  });

  it('transforms 1997 with basic notation', () => {
    expect(pipe.transform(1997, 'basic')).toBe('MDCCCCLXXXXVII');
  });
});
