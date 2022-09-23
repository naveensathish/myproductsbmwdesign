import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dob: any): any {
    return new Date().getFullYear() - new Date(dob).getFullYear();
  }
}
