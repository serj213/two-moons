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
