import type { Meta, StoryObj } from '@storybook/react';

import { Header, EHeaderTheme } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Widgets/Header',
  component: Header
};

export default meta;
type Story = StoryObj<typeof Header>;

export const White: Story = {
  args: {
    theme: EHeaderTheme.white
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
    theme: EHeaderTheme.black
  }
};
