import type { Meta, StoryObj } from '@storybook/react';

import { Button, EButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  args: {
    children: 'dfdf'
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    theme: EButtonTheme.clear
  }
};

export const Default: Story = {
  args: {
    theme: EButtonTheme.default
  }
};

export const fullWidth: Story = {
  args: {
    theme: EButtonTheme.default,
    fullWidth: true
  }
};

export const basket: Story = {
  args: {
    theme: EButtonTheme.basket,
    countElem: 0
  }
};

export const basketWhite: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', padding: 15, background: '#000' }}>
        <Story />
      </div>
    )
  ],
  args: {
    theme: EButtonTheme.basketWhite,
    countElem: 0
  }
};

export const whiteClear: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', padding: 15, background: '#000' }}>
        <Story />
      </div>
    )
  ],
  args: {
    theme: EButtonTheme.whiteClear
  }
};
