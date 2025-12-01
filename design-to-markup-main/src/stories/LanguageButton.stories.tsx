import LanguageButton from '@/components/Buttons/LanguageButton';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
  title: 'Components/Buttons/LanguageButton',
  component: LanguageButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LanguageButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
