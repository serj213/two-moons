import type { Meta, StoryObj } from '@storybook/react';

import { LoaderPage } from './LoaderPage';

const meta: Meta<typeof LoaderPage> = {
  title: 'Widgets/LoaderPage',
  component: LoaderPage
};

export default meta;
type Story = StoryObj<typeof LoaderPage>;

export const DefaultLoader: Story = {
  args: {
  }
};
