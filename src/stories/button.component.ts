// import { CommonModule } from '@angular/common';
// import { Component, Input, Output, EventEmitter, input, output } from '@angular/core';

// @Component({
//   selector: 'storybook-button',
//   standalone: true,
//   imports: [CommonModule],
//   template: ` <button
//   type="button"
//   (click)="onClick.emit($event)"
//   [class]="classes"
//   [style]="{ 'background-color': backgroundColor }"
// >
//   {{ label() }}
// </button>`,
//   styleUrls: ['./button.css'],
// })
// export class ButtonComponent {
//   /** Is this the principal call to action on the page? */
//   // @Input()
//   // primary = false;
//   primary=input(false);

//   /** What background color to use */
//   backgroundColor?=input<string>()
//   // @Input()
//   // backgroundColor?: string;

//   /** How large should the button be? */
//   // @Input()
//   // size: 'small' | 'medium' | 'large' = 'medium';
//   size=input<'small'|'medium'|'large'>('medium')

//   /**
//    * Button contents
//    *
//    * @required
//    */
//   // @Input()
//   // label = 'Button';
//   label=input('Button')

//   /** Optional click handler */
//   onClick=output<Event>()

//   // @Output()
//   // onClick = new EventEmitter<Event>();

//   public get classes(): string[] {
//     const mode = this.primary() ? 'storybook-button--primary' : 'storybook-button--secondary';

//     return ['storybook-button', `storybook-button--${this.size()}`, mode];
//   }
// }



import { CommonModule } from '@angular/common';
import { Component, input, output, computed } from '@angular/core';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      (click)="onClick.emit($event)"
      [class]="buttonClasses()"
      [style.backgroundColor]="backgroundColor()"
    >
      {{ label() }}
    </button>
  `,
  // 1. Removed styleUrls since we are using Tailwind utilities
})
export class ButtonComponent {
  /** Inputs using Signals */
  primary = input(false);
  backgroundColor = input<string>();
  size = input<'small' | 'medium' | 'large'>('medium');
  label = input('Button');

  /** Output using Signal-based output */
  onClick = output<Event>();

  /**
   * 2. Use a computed signal for classes to handle Tailwind logic efficiently.
   * This replaces the old 'classes' getter.
   */
  buttonClasses = computed(() => {
    // Base Styles (.storybook-button)
    const base = "inline-block cursor-pointer border-0 rounded-[3em] font-bold leading-none font-sans";

    // Size Styles (.storybook-button--small, etc.)
    const sizeMap = {
      small: "px-4 py-[10px] text-[12px]",
      medium: "px-5 py-[11px] text-[14px]",
      large: "px-6 py-[12px] text-[16px]",
    };

    // Variant Styles (.storybook-button--primary/secondary)
    const variant = this.primary()
      ? "bg-[#555ab9] text-white"
      : "bg-transparent text-[#333] ring-1 ring-inset ring-black/15";

    return `${base} ${sizeMap[this.size()]} ${variant}`;
  });
}