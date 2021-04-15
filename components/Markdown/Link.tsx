import React from 'react';
import Link from 'next/link';

interface CustomLinkProps {
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const CustomLink = ({ href, children }: CustomLinkProps): JSX.Element => (
  <Link href={href}>
    <a className="text-blue-500 hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300 hover:no-underline">
      {children}
    </a>
  </Link>
);

export default CustomLink;
