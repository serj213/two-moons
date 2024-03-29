import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Shared/Text',
  component: Text,
  args: {
    children: 'text'
  }
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {}
};
