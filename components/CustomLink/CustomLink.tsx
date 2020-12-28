import React, { FunctionComponent } from 'react';
import Link, { LinkProps } from 'next/link';

const CustomLink: FunctionComponent<LinkProps> = ({
  as,
  href,
  ...res
}: LinkProps) => (
  <>
    <Link as={as} href={href} {...res}>
      <a />
    </Link>
  </>
);

export default CustomLink;
