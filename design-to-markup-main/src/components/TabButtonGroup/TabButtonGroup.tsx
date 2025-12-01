import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import styles from './TabButtonGroup.module.scss';

export interface TabItem {
  id: number;
  label: string;
}

interface TabButtonGroupProps {
  tabs: readonly TabItem[] | TabItem[];
  activeTab: number;
  onTabChange: (tabId: number) => void;
  className?: string;
}

export default function TabButtonGroup({
  tabs,
  activeTab,
  onTabChange,
  className,
}: TabButtonGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [barStyle, setBarStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const activeButton = container.children[activeIndex] as HTMLElement;

    if (activeButton) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      setBarStyle({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
      });
    }
  }, [activeTab, tabs]);

  return (
    <div className={clsx(styles.tab_button_group_wrapper, className)}>
      <div ref={containerRef} className={styles.tab_button_group}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={clsx(styles.tab_button, {
              [styles.active]: activeTab === tab.id,
            })}
            onClick={() => onTabChange(tab.id)}
            aria-selected={activeTab === tab.id}
            role='tab'
          >
            <span className={styles.tab_button_text}>{tab.label}</span>
          </button>
        ))}
      </div>
      <div
        className={styles.active_bar}
        style={{
          transform: `translateX(${barStyle.left}px)`,
          width: `${barStyle.width}px`,
        }}
      />
    </div>
  );
}
