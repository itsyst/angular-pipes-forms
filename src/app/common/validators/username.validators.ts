import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
    if ((control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true }
    return null;
  }

  static shouldBeUnique(control: AbstractControl) {

        if (control.value.toLowerCase() === 'khaled') {
          return ({ shouldBeUnique: true });
        }
        else
        {
          return (null)
        };
  }
}
