import SlideCard from '@/components/Cards/SlideCard';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
  title: 'Components/SlideCard',
  component: SlideCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '카드 제목',
    },
    description: {
      control: 'text',
      description: '카드 설명',
    },
    imageSrc: {
      control: 'text',
      description: '이미지 경로',
    },
  },
} satisfies Meta<typeof SlideCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a description of the card content.',
    imageSrc: '/images/slide_image.png',
  },
};
