import {FormControl, FormGroup} from '@angular/forms';

export function getPatientForm(): FormGroup {
  return new FormGroup({
    patient: new FormControl(),
    code: new FormControl()
  });
}
