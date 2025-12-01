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

// 기본 언어 버튼
export const Default: Story = {};

// 사용 예시
export const Example: Story = {
  render: () => (
    <div style={{ padding: '100px' }}>
      <p style={{ marginBottom: '16px', color: '#666' }}>
        버튼을 클릭하여 언어 선택 팝오버를 열 수 있습니다.
      </p>
      <LanguageButton />
      <p style={{ marginTop: '16px', color: '#999', fontSize: '14px' }}>
        * 팝오버는 버튼 아래에 표시됩니다
      </p>
    </div>
  ),
};

// 헤더 내에서의 사용 예시
export const InHeader: Story = {
  render: () => (
    <div
      style={{
        background: '#f5f5f5',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '12px',
        alignItems: 'center',
        minWidth: '400px',
      }}
    >
      <span style={{ marginRight: 'auto', fontWeight: 'bold' }}>Logo</span>
      <button
        style={{
          padding: '8px 16px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Menu
      </button>
      <LanguageButton />
    </div>
  ),
};
