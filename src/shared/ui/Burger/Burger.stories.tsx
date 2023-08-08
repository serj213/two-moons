import type { Meta, StoryObj } from '@storybook/react';
import { EButtonTheme } from '../Button/Button';

import { Burger, EBurgerTheme } from './Burger';

const meta: Meta<typeof Burger> = {
  title: 'Shared/Burger',
  component: Burger
};

export default meta;
type Story = StoryObj<typeof Burger>;

export const Primary: Story = {
  args: {
    theme: EBurgerTheme.white
  }
};

export const Dark: Story = {

  decorators: [
    (Story) => (
      <div style={{ height: '100vh', padding: 15, background: '#000' }}>
        <Story />
      </div>
    )
  ],
  args: {
    theme: EBurgerTheme.black
  }
};
