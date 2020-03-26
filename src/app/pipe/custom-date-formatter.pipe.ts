import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDateFormatter'
})
export class CustomDateFormatterPipe implements PipeTransform {

  transform(dateStr: string): string {
    return 'La date est : ' + dateStr;
  }

}
