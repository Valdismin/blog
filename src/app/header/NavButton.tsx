'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode} from 'react';


interface Props {
  children: ReactNode;
  href: string;
  onClick?: () => void;
}

export const NavButton = ({ children, href, onClick }: Props) => {
  const pathname = usePathname();

  const handleClick = () => {
    if (!pathname.includes(href)) {

      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(
        'group relative flex h-full w-full items-center px-2 py-1 text-p4 [&_svg]:stroke-p4'
      )}
    >
      {children}
    </Link>
  );
};
