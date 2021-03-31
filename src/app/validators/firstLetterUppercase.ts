import { AbstractControl, ValidatorFn } from '@angular/forms';

export function firstLetterUppercase(): ValidatorFn {
  return (control: AbstractControl) => {
    const controlValue = control.value as string;
    if (!controlValue) {
      return null;
    }

    if (controlValue.length === 0) {
      return null;
    }

    const firstLetter = controlValue[0];
    if (firstLetter !== firstLetter.toUpperCase()) {
      return {
        firstLetterUppercase: {
          message: 'La primera letra debe ser mayúscula'
        }
      };
    }

    return null;
  };
}
