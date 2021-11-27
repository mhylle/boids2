import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number[] {
    let res = [];
    for (let i = 0; i < value; i++) {
      res.push(i);
    }
    return res;
  }
}
