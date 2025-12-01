import Tag from '@/components/Tags/Tag';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '태그 내용',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Syntekabio',
  },
};

export const MultipleTags: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag>Design</Tag>
      <Tag>Development</Tag>
      <Tag>Marketing</Tag>
      <Tag>Strategy</Tag>
    </div>
  ),
};
