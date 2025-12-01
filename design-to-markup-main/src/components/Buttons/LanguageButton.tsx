import clsx from 'clsx';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './LanguageButton.module.scss';
import ArrowDownIcon from '/public/images/icons/icon-arrow_down.svg';
import DotOFFIcon from '/public/images/icons/icon-dot_off.svg';
import DotOnIcon from '/public/images/icons/icon-dot_on.svg';
import EarthIcon from '/public/images/icons/icon-earth.svg';

type LangType = 'ko' | 'en';
const langList = [
  { value: 'ko', label: '한국어' },
  { value: 'en', label: 'English' },
];

export default function LanguageButton() {
  const [lang, setLang] = useState<LangType>('ko');
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const [popoverPosition, setPopoverPosition] = useState<{ top: number; left: number } | null>(
    null,
  );

  useEffect(() => {
    if (open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPopoverPosition({
        top: rect.bottom,
        left: rect.left,
      });
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      if (buttonRef.current?.contains(target) || popoverRef.current?.contains(target)) {
        return;
      }
      setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  const langDisplay = lang === 'ko' ? '한국어' : 'English';

  return (
    <>
      <button className={styles.language_button} ref={buttonRef} onClick={() => setOpen((o) => !o)}>
        <EarthIcon />
        <span>{langDisplay}</span>
        <ArrowDownIcon style={{ transform: open ? 'rotate(-180deg)' : 'rotate(0)' }} />
      </button>
      {open &&
        popoverPosition &&
        createPortal(
          <LanguagePopover
            ref={popoverRef}
            position={popoverPosition}
            lang={lang}
            setLang={(l: LangType) => setLang(l)}
            close={() => setOpen(false)}
          />,
          document.body,
        )}
    </>
  );
}

type LanguagePopoverProps = {
  position: { top: number; left: number };
  lang: LangType;
  setLang: (lang: LangType) => void;
  close: () => void;
};

const LanguagePopover = forwardRef<HTMLDivElement, LanguagePopoverProps>(
  ({ position, lang, setLang, close }, ref) => {
    return (
      <div
        className={styles.language_popover}
        ref={ref}
        style={{
          top: position.top,
          left: position.left,
        }}
      >
        {langList.map((opt) => (
          <button
            className={clsx(styles.language_popover_button)}
            key={opt.value}
            onClick={(e) => {
              e.stopPropagation();
              setLang(opt.value as LangType);
              close();
            }}
          >
            {lang === opt.value ? <DotOnIcon /> : <DotOFFIcon />}
            {opt.label}
          </button>
        ))}
      </div>
    );
  },
);

LanguagePopover.displayName = 'LanguagePopover';
