import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Page } from './Page';
import { playDefault } from './page.interactions';

const meta = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
  play: playDefault,
};
