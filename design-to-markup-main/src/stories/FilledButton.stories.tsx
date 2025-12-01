import FilledButton from '@/components/Buttons/FilledButton';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import SquareIcon from '/public/images/icons/icon-square.svg';

const meta = {
  title: 'Components/Buttons/FilledButton',
  component: FilledButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm'],
      description: '버튼의 크기',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'gray'],
      description: '버튼의 색상',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    children: {
      control: 'text',
      description: '버튼 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 상태',
    },
    startAdornment: {
      control: 'radio',
      options: ['none', 'icon'],
      mapping: {
        none: undefined,
        icon: <SquareIcon />,
      },
      description: '시작 아이콘',
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    endAdornment: {
      control: 'radio',
      options: ['none', 'icon'],
      mapping: {
        none: undefined,
        icon: <SquareIcon />,
      },
      description: '끝 아이콘',
      table: {
        defaultValue: { summary: 'none' },
      },
    },
  },
} satisfies Meta<typeof FilledButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary 버튼 (기본)
export const Primary: Story = {
  args: {
    children: 'Button',
    color: 'primary',
    size: 'md',
  },
};

// Gray 버튼
export const Gray: Story = {
  args: {
    children: 'Button',
    color: 'gray',
    size: 'md',
  },
};

export const WithIcons: Story = {
  args: {
    children: 'Button',
    startAdornment: <SquareIcon />,
    endAdornment: <SquareIcon />,
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

// 다양한 크기와 색상 조합
export const AllSizesPrimary = {
  render: () => (
    <div
      style={{ display: 'flex', gap: '16px', flexDirection: 'column', alignItems: 'flex-start' }}
    >
      <FilledButton size='xl' color='primary'>
        Extra Large Primary
      </FilledButton>
      <FilledButton size='lg' color='primary'>
        Large Primary
      </FilledButton>
      <FilledButton size='md' color='primary'>
        Medium Primary
      </FilledButton>
      <FilledButton size='sm' color='primary'>
        Small Primary
      </FilledButton>
    </div>
  ),
};

export const AllSizesGray = {
  render: () => (
    <div
      style={{ display: 'flex', gap: '16px', flexDirection: 'column', alignItems: 'flex-start' }}
    >
      <FilledButton size='xl' color='gray'>
        Extra Large Gray
      </FilledButton>
      <FilledButton size='lg' color='gray'>
        Large Gray
      </FilledButton>
      <FilledButton size='md' color='gray'>
        Medium Gray
      </FilledButton>
      <FilledButton size='sm' color='gray'>
        Small Gray
      </FilledButton>
    </div>
  ),
};

export const AllColors = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <FilledButton color='primary'>Primary</FilledButton>
      <FilledButton color='gray'>Gray</FilledButton>
    </div>
  ),
};
