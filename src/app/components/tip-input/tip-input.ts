import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-tip-input',
  imports: [],
  templateUrl: './tip-input.html',
})
export class TipInput {
  /** the label for the input field */
  label = input<string>('Tip Amount');

  /**optional error message */
  error = input<string | null>(null);
  /**value for the input field */

  value = input<number>(0);
  /** value for the output field*/
  valueChange = output<number>();

  /**we need variants one for entering currency input such as dollar,and a
   * another for number os people
   */

  variant = input<'currency' | 'people'>('currency');

  //limitInputByWidth(input: HTMLInputElement) {
  validateCurrencyInput = (input: HTMLInputElement): void => {
    input.value = input.value.replace(/[^0-9.]/g, '');

    // Prevent multiple dots
    const parts = input.value.split('.');

    if (parts.length > 2) {
      input.value = parts[0] + '.' + parts.slice(1).join('');
    }

    // Allow at most two digits after the decimal point
    if (parts.length === 2 && parts[1].length > 2) {
      input.value = parts[0] + '.' + parts[1].slice(0, 2);
    }

    // Prevent overflow
    while (input.scrollWidth > input.clientWidth) {
      input.value = input.value.slice(0, -1);
    }
    const numericValue = Number(input.value);
    if (!isNaN(numericValue)) {
      this.valueChange?.emit(numericValue);
    } else {
      this.valueChange?.emit(0);
    }
  };
  limitInputByWidth(input: HTMLInputElement) {
    this.validateCurrencyInput(input);
  }
}

// Allow numbers and dots

//function validatePeopleInput(value:string):string{}
