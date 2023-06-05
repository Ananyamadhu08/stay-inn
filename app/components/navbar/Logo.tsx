'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/')}
      className="hidden md:flex cursor-pointer items-center gap-2"
    >
      <Image
        alt="Logo"
        height="50"
        width="50"
        src="/images/stay-inn-logo.png"
      />
      <h1 className="text-[1.8rem] hidden lg:block text-indigo-900 font-bold">
        StayInn
      </h1>
    </div>
  );
};

export default Logo;
