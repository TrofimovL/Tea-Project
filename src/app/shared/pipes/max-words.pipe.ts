import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxWords'
})
export class MaxWordsPipe implements PipeTransform {
  transform(value: string, maxCount: number = 160): string {
    return (value.length > maxCount ? value.slice(0, maxCount) + '...' : value);
  }
}
