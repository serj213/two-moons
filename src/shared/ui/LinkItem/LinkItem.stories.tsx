import type { Meta, StoryObj } from '@storybook/react';

import { LinkItem } from './LinkItem';

const meta: Meta<typeof LinkItem> = {
  title: 'Shared/Button',
  component: LinkItem,
  args: {
    children: 'link item'
  }
};

export default meta;
type Story = StoryObj<typeof LinkItem>;

export const Primary: Story = {
};
