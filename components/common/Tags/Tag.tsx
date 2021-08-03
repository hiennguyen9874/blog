import Link from 'next/link';

type TagProps = {
  content: string;
  href: string;
  as: string;
};

const Tag = ({ content, href, as }: TagProps): JSX.Element => {
  return (
    <div className="mx-1">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link href={href} as={as}>
        <a className="px-4 py-1 bg-omega-light dark:bg-omega-dark text-omega-dark dark:text-omega-light text-xs font-semibold leading-5	inline-block rounded-lg	hover:bg-omega-dark hover:text-omega-light dark:hover:bg-omega-light dark:hover:text-omega-dark">
          {content}
        </a>
      </Link>
    </div>
  );
};

export default Tag;
