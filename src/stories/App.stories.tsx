import type { Meta, StoryObj } from '@storybook/react';

import { App } from '../App';

const meta = {
  title: 'Example/App',
  component: App,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'App',
  },
};

export const Secondary: Story = {
  args: {
    label: 'App',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'App',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'App',
  },
};
