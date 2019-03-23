import { RomanNumeralsPipe } from './roman-numerals.pipe';

describe('RomanNumeralsPipe', () => {
  const pipe = new RomanNumeralsPipe();

  it('creates an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms 1', () => {
    expect(pipe.transform(1)).toBe('I');
  });

  it('transforms 1997', () => {
    expect(pipe.transform(1997)).toBe('MCMXCVII');
  });

  it('transforms 3999', () => {
    expect(pipe.transform(3999)).toBe('MMMCMXCIX');
  });

  it('transforms 1997 with basic notation', () => {
    expect(pipe.transform(1997, 'basic')).toBe('MDCCCCLXXXXVII');
  });

  it("doesn't mutate value", () => {
    var value = 1997;
    pipe.transform(value);
    expect(value).toBe(1997);
  });

  it('throws an error on values over 3,999', () => {
    expect(() => pipe.transform(4000)).toThrow();
  });

  it('throws an error on negative values', () => {
    expect(() => pipe.transform(-10)).toThrow();
  });

  it('throws an error on zero values', () => {
    expect(() => pipe.transform(0)).toThrow();
  });

  it('throws an error on fractional values', () => {
    expect(() => pipe.transform(Math.PI)).toThrow();
  });
});
