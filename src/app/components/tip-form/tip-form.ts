import { Component, inject } from '@angular/core';
import { TipInput } from '../tip-input/tip-input';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tip-form',
  imports: [TipInput, ReactiveFormsModule],
  templateUrl: './tip-form.html',
  styleUrl: './tip-form.css',
})
export class TipForm {
  // Create a form using form builder and form group to manage the state of the form. The form will have a single control for the tip amount, which will be a number. We will also add validation to ensure that the tip amount is a positive number.

  private fb = inject(FormBuilder);

  inputForm = this.fb.group({
    tipAmount: [0],
  });

  submit() {
    if (this.inputForm.valid) {
      const tipAmount = this.inputForm.value.tipAmount;
      console.log('Tip Amount:', tipAmount);
    } else {
      console.log('Form is invalid');
    }
  }
}