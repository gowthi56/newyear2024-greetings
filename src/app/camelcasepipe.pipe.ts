import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcasepipe'
})
export class CamelcasepipePipe implements PipeTransform {
    transform(value: string): string {
      return value.replace(/\w\S*/g, (word) => {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      }).replace(/\s+/g, '');
    }
}
