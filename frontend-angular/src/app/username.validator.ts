import {Observable} from 'rxjs';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from './user.service';
import { of } from 'rxjs';
import { distinctUntilChanged,debounceTime,take,switchMapTo,tap,map } from 'rxjs/operators';
export class ValidateUsername {
    static createValidator(service: UserService) {
        console.log("inside create Validator")
      return (control: AbstractControl): Observable<ValidationErrors | null> => {
        if (!control.valueChanges || control.pristine) {
          return of(null);
        } else {
          return control.valueChanges.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            take(1),
            switchMapTo(service.usernameCheck(control.value)),
            tap(() => control.markAsTouched()),
            map((data) => (data ? { userExist: true } : null))
          );
        }
      };
    }
  }