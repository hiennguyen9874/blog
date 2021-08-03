import Link from 'next/link';
import chunk from 'lodash/chunk';

import Tag from '@components/common/Tags/Tag';

interface CategoriesProps {
  categories: string[];
}

const Categories = ({ categories }: CategoriesProps): JSX.Element => {
  return (
    <div className="px-6 py-4 rounded-2xl bg-white dark:border-gray-700 dark:bg-gray-700">
      {chunk(categories, 2).map((twoElement) => (
        <div className="mx-4 my-4 flex flex-row" key={twoElement.join(',')}>
          {twoElement.map((category) => (
            <Tag
              content={category}
              href="/category/[slug]"
              as={`/category/${category}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Categories;
