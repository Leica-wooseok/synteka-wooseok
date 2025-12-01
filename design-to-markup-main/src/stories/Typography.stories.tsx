import Typography from '@/components/Typography';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['heading1', 'heading2', 'heading3', 'paragraph', 'link', 'caption'],
      description: '텍스트 스타일 variant',
      table: {
        defaultValue: { summary: 'paragraph' },
      },
    },
    color: {
      control: 'select',
      options: ['link', 'headline', 'paragraph', 'caption'],
      description: '텍스트 색상',
    },
    component: {
      control: 'text',
      description: 'HTML 요소 타입 (예: h1, p, div)',
    },
    children: {
      control: 'text',
      description: '텍스트 내용',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: 'heading1',
    color: 'headline',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'heading2',
    color: 'headline',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'heading3',
    color: 'headline',
    children: 'Heading 3',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'paragraph',
    color: 'paragraph',
    children: 'This is a paragraph text.',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    color: 'link',
    children: 'This is a link',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    color: 'caption',
    children: 'This is a caption',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant='heading1' color='headline'>
        Heading 1
      </Typography>
      <Typography variant='heading2' color='headline'>
        Heading 2
      </Typography>
      <Typography variant='heading3' color='headline'>
        Heading 3
      </Typography>
      <Typography variant='paragraph' color='paragraph'>
        This is a paragraph text with normal styling.
      </Typography>
      <Typography variant='link' color='link'>
        This is a link text
      </Typography>
      <Typography variant='caption' color='caption'>
        This is a caption text
      </Typography>
    </div>
  ),
};
