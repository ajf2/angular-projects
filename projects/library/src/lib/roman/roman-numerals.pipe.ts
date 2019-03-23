import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman'
})
export class RomanNumeralsPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    return 'MCMXCVII';
  }

}
