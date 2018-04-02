import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'error'
})
export class ErrorPipe implements PipeTransform {

  /**
   * Handle the data from pipe
   *
   * @param obj
   * @returns {any}
   */
  transform(obj) {
    const keys = Object.keys(obj);
    if (keys && keys.length > 0) {
      return keys[0];
    }
    return null;
  }

}
