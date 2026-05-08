import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { TipInput } from './tip-input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TipInput> = {
  title: 'Components/TipInput',
  component: TipInput,
  tags: ['autodocs'],
  args: {
    label: 'test tip amount',
    value: 0,
    error: null,
    // valueChange: fn(),
    valueChange: (value) => console.log(value),
  },
};
// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
//   args: { onClick: fn() },
// };

export default meta;
type Story = StoryObj<TipInput>;
export const Default: Story = {
  args: {
    error: '',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    //primary: true,
    label: 'Button',

    //error: {},
  },
};
//   parameters: {
//     backgrounds: {
//       options: {
//         //black:{name:'Black',value:'#f'}
//         red: { name: 'Red', value: '#f00' },
//         green: { name: 'Green', value: '#0f0' },
//         blue: { name: 'Blue', value: '#00f' },
//       },
//     },
//   },
// };
