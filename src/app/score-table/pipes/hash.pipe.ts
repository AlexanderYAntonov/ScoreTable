import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hash',
})
export class HashPipe implements PipeTransform {

  transform(value: string): any {
    return value.split("").reduce(function(a, b) {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0).toString(16);
  }

}
