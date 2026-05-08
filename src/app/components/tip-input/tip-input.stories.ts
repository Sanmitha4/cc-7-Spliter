// import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
// import { fn } from 'storybook/test';

// import { TipInput } from './tip-input';
// import { TipForm } from '../tip-form/tip-form';

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// const meta: Meta<TipInput> = {
//   title: 'Components/TipInput',
//   component: TipInput,
//   tags: ['autodocs'],
//   args: {
//     label: 'test tip amount',
//     value: 0,
//     error: null,
//     // valueChange: fn(),
//     //valueChange: (value) => console.log(value),
//   },
// };
// // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
// //   args: { onClick: fn() },
// // };

// export default meta;
// type Story = StoryObj<TipInput>;
// export const Default: Story = {
//   args: {
//     error: '',
//   },
// };

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Primary: Story = {
//   args: {
//     //primary: true,
//     label: 'Button',

//     //error: {},
//   },
// };
// //a story with error
// export const WithError: Story = {
//   args: {
//     error: 'This is an error message',
//   },  
// //   parameters: {
// //     backgrounds: {
// //       options: {
// //         //black:{name:'Black',value:'#f'}
// //         red: { name: 'Red', value: '#f00' },
// //         green: { name: 'Green', value: '#0f0' },
// //         blue: { name: 'Blue', value: '#00f' },
// //       },
// //     },
// //   },
// // };

// // Lets use Tip Form here and create a story for it as well. We will use the same args as the Tip Input story, but we will also add a submit button to the form and log the form value when the button is clicked. We will also add a test to ensure that the form is submitting the correct value when the button is clicked.
// // export const WithForm : Story = {
// //   // we need to import TipForm here to use it in the template
// //   decorators: [
// //     moduleMetadata({
// //       imports: [TipForm],
// //     }),
// //   ],
// //   render: () => ({
// //     template: `
// //       <app-tip-form></app-tip-form>
// //     `,
// //   }),
// // } 
// export const WithForm : Story = {
//   decorators: [
//     moduleMetadata({
//       imports: [TipForm],
//     }),
//   ],

//   render: () => ({
//     template: `<app-tip-form></app-tip-form>`,
//   }),
// }


// }


import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { fn } from 'storybook/test';

import { TipInput } from './tip-input';
import { TipForm } from '../tip-form/tip-form';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TipInput> = {
  title: 'Components/TipInput',
  component: TipInput,
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  // args: { click: fn(), label: 'Default title', primary: false, size: 'medium', date: new Date() },
  args: {
    label: 'Test Tip Amount:',
    error: '',
    value: 50,
    valueChange: (value) => console.log(value),
  },
};

export default meta;

type Story = StoryObj<TipInput>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: 'Invalid input',
  },
};

// Lets use Tip Form here and create a story for it as well. We will use the same args as the Tip Input story, but we will also add a submit button to the form and log the form value when the button is clicked. We will also add a test to ensure that the form is submitting the correct value when the button is clicked.
export const WithForm: Story = {
  // we need to import TipForm here to use it in the template
  decorators: [
    moduleMetadata({
      imports: [TipForm],
    }),
  ],
  render: () => ({
    template: `
      <app-tip-form></app-tip-form>
    `,
  }),
};