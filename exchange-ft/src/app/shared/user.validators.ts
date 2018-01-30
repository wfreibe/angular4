import { FormControl, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { UserStoreService } from '../shared/user-store.service';

export class UserValidators {

  /*
  static isbnFormat(control: FormControl): { [error: string]: any } {
    if (!control.value) { return null; }
    const isolatedNumbers = control.value.replace(/-/g, '');
    const isbnPattern = /(^\d{10}$)|(^\d{13}$)/;
    return isbnPattern.test(isolatedNumbers) ? null : {
      isbnFormat: { valid: false }
    };
  }

  static atLeastOneAuthor(controlArray: FormArray): { [error: string]: any } {
    const check = controlArray.controls.some(el => {
      return (el.value) ? true : false;
    });
    return check ? null : {
      atLeastOneAuthor: { valid: false }
    };
  }*/

  static emailExists(us: UserStoreService) {
    return function(control: FormControl): Observable<{ [error: string]: any }> {
      // console.log(control.value);
      return us.check(control.value)
        .map(exists => (exists === false) ? null : {
          emailExists: { valid: false }
        });
    };
  }

}
