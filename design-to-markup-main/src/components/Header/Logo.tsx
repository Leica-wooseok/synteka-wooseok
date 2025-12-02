import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/'>
      <Image src='/images/commons/logo.svg' width={109} height={22} alt='신테카 바이오 로고' />
    </Link>
  );
}
