import FilledButton from '@/components/Buttons/FilledButton';

type LoginButtonProps = {
  isMobile: boolean;
};

export default function LoginButton({ isMobile }: LoginButtonProps) {
  return (
    <FilledButton
      style={{ minWidth: isMobile ? '100%' : 80 }}
      size={isMobile ? 'lg' : 'md'}
      color='primary'
    >
      Login
    </FilledButton>
  );
}
