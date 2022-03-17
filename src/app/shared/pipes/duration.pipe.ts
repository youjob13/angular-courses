import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): any {
    if (typeof value !== 'number') {
      return value;
    }

    const hours = Math.floor(value / 60);
    const mins = Math.floor(value % 60);

    const formattedHours = hours > 9 ? hours : '0' + hours;
    const formattedMins = mins > 9 ? mins : '0' + mins;
    const formattedText = mins % 5 ? 'hours' : 'hour';

    return `${formattedHours}:${formattedMins} ${formattedText}`;
  }
}
