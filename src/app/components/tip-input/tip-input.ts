// import { Component, input, output } from '@angular/core';
// import { ControlValueAccessor } from '@angular/forms';
// import { fn } from 'storybook/test';

// @Component({
//   selector: 'app-tip-input',
//   imports: [],
//   templateUrl: './tip-input.html',
// })
// export class TipInput implements ControlValueAccessor{
//   /** the label for the input field */
//   label = input<string>('Tip Amount');

//   /**optional error message */
//   error = input<string | null>(null);
//   /**value for the input field */

//   value = input<number>(0);
//   /** value for the output field*/
//   valueChange = output<number>();

//   /**we need variants one for entering currency input such as dollar,and a
//    * another for number os people
//    */

//   variant = input<'currency' | 'people'>('currency');

//   //limitInputByWidth(input: HTMLInputElement) {
//   validateCurrencyInput = (input: HTMLInputElement): void => {
//     input.value = input.value.replace(/[^0-9.]/g, '');

//     // Prevent multiple dots
//     const parts = input.value.split('.');

//     if (parts.length > 2) {
//       input.value = parts[0] + '.' + parts.slice(1).join('');
//     }

//     // Allow at most two digits after the decimal point
//     if (parts.length === 2 && parts[1].length > 2) {
//       input.value = parts[0] + '.' + parts[1].slice(0, 2);
//     }

//     // Prevent overflow
//     while (input.scrollWidth > input.clientWidth) {
//       input.value = input.value.slice(0, -1);
//     }
//     const numericValue = Number(input.value);
//     if (!isNaN(numericValue)) {
//       this.valueChange?.emit(numericValue);
//     } else {
//       this.valueChange?.emit(0);
//     }
//   };
//   limitInputByWidth(input: HTMLInputElement) {
//     this.validateCurrencyInput(input);
//   }
// }

// // Allow numbers and dots

// function validatePeopleInput(value:string):string{
//   /**for people only numbers are allowed it should throw error if it is in decimal */
//   if(/^\d+$/.test(value)){
//     return value;
//   }else{
//     throw new Error('Invalid input: only whole numbers are allowed for people count.');
//   }
// }
//   /** this function will be called when the user inputs value in the input field it will validate the input based on the variant selected and emit the value change event with the validated value or error message if the input is invalid */
//   /** based on the variant currency or people should be selected */
  
// inputIcon(){
//   if(this.variant()=='currency'){
//     this.validateCurrencyInput(input);
//   }
//    else{
//     this.validatePeopleInput(input.value);

// }
// }
// //Tell the form that the input has been touched as well as value has been changed,so that f
// //form can update its sttae accordingly
// this.onTouched();
// this.onChange(this.value);

// //Also get a viewchild reference to the input  element so that we can set
// //the value of the input field when the form value changes
// inputField=viewChild<HTMLInputElement>('tipInPut');

// writeValue(value: number): void {
//   if(this.inputField){
//     this.inputField.value = value.toString();
//   }
//   registerOnChange(fn: any): void {
//     this.onChange = fn;
//   }
//   registerOnTouched(fn: any): void {
//     this.onTouched = fn;
//   }



// //we are making the input component a form compliant one by implementing the ControlValueAccessor interface and providing the necessary methods to handle value changes and touch events.

// //we are  also makig the inpt component a  form compliNT ONE
// onChange:any = () => {};
// onTouched:any = () => {};

import { Component, input, output, viewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-tip-input',
  imports: [],
  templateUrl: './tip-input.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TipInput,
    },
  ],
})
export class TipInput implements ControlValueAccessor {
  /** the lable for the input field*/
  label = input<string>('Tip Amount:');

  /** optional error message */
  error = input<string | null>(null);

  /** value for the input field */
  value = input<number>(0);

  /** output event for when the input value changes */
  valueChange = output<number>();

  /** we need variants one for entering curreny input
   * such as dollor, and another for number of people.
   */
  variant = input<'currency' | 'people'>('currency');

  private validateCurrencyInput = (input: HTMLInputElement): void => {
    // Allow numbers and dots
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

    // Emit the value change event
    const numericValue = Number(input.value);

    if (!isNaN(numericValue)) {
      this.valueChange?.emit(numericValue);
    } else {
      this.valueChange?.emit(0);
    }
  };

  validatePeopleInput = (input: HTMLInputElement): void => {
    // Allow only numbers
    input.value = input.value.replace(/[^0-9]/g, '');

    // Prevent leading zeros
    input.value = input.value.replace(/^0+(?=\d)/, '');

    // Prevent overflow
    while (input.scrollWidth > input.clientWidth) {
      input.value = input.value.slice(0, -1);
    }

    // Emit the value change event
    const numericValue = Number(input.value);

    if (!isNaN(numericValue)) {
      this.valueChange?.emit(numericValue);
    } else {
      this.valueChange?.emit(0);
    }
  };

  limitInputByWidth(input: HTMLInputElement) {
    // depending on the variant, call the right validation function
    if (this.variant() === 'currency') {
      this.validateCurrencyInput(input);
    } else {
      this.validatePeopleInput(input);
    }

    // Tell the form that the input has been touched as well as
    // value has been changed, so that the form can update its state accordingly.
    this.onTouched();
    this.onChange(input.value ? Number(input.value) : 0);
  }

  inputIcon() {
    // depending on the variant, return the right icon
    if (this.variant() === 'currency') {
      return '/dollor.svg';
    } else {
      return '/person.svg';
    }
  }

  // We are also making this input component a form compliant one.
  onChange: any = () => {};
  onTouched: any = () => {};

  // Also get a viewChild reference to the input element so that we can set the value of the input field when the form value changes.
  inputField = viewChild<HTMLInputElement>('tipInput');

  writeValue(value: number): void {
    //this.value(value);
    if (this.inputField()) {
      this.inputField()!.value = value.toString();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}