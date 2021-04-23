import React from 'react';
import Link from 'next/link';
import chunk from 'lodash/chunk';

interface CategoriesProps {
  categories: string[];
}

const Categories = ({ categories }: CategoriesProps): JSX.Element => {
  return (
    <div className="px-6 mt-10 py-4 rounded-2xl bg-white dark:border-gray-700 dark:bg-gray-700">
      {chunk(categories, 2).map((twoElement) => (
        <div className="mx-4 my-4 flex flex-row" key={twoElement.join(',')}>
          {twoElement.map((category) => (
            <>
              <div className="mx-1" key={category}>
                <Link href="/category/[slug]" as={`/category/${category}`}>
                  <a className="px-2 pb-1.5 pt-1 font-normal text-md items-center rounded-lg bg-gray-400 text-gray-100 dark:hover:bg-gray-400 dark:bg-gray-600 dark:text-white hover:bg-gray-600 hover:no-underline">
                    {category}
                  </a>
                </Link>
              </div>
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Categories;
