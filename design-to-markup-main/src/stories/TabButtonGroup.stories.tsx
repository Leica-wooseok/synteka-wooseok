import TabButtonGroup, { TabItem } from '@/components/TabButtonGroup/TabButtonGroup';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';

const meta = {
  title: 'Components/TabButtonGroup',
  component: TabButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const tabs: TabItem[] = [
  { id: 1, label: 'Tab 1' },
  { id: 2, label: 'Tab 2' },
  { id: 3, label: 'Tab 3' },
];

export const Default: Story = {
  args: {
    tabs: tabs,
    activeTab: 1,
    onTabChange: () => {},
  },
  render: () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
      <div style={{ minWidth: '600px' }}>
        <TabButtonGroup tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <div style={{ padding: '24px', background: '#f5f5f5', marginTop: '16px' }}>
          <h3>Content for Tab {activeTab}</h3>
          <p>This is the content area for the selected tab.</p>
        </div>
      </div>
    );
  },
};
