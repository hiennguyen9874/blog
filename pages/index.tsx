/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { GetStaticPropsResult, NextPage } from 'next';
import Link from 'next/link';

import { Layout, Seo, Card, Pagination } from '@components/common';
import { getSortedPosts, PostType, getPostsCategories } from '@utils/posts';

interface IndexProps {
  posts: Array<PostType>;
  categories: string[];
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<IndexProps>
> {
  const categories = await getPostsCategories();
  return {
    props: {
      posts: await getSortedPosts(),
      categories: categories.map(({ params }) => params.slug),
    },
  };
}

const Index: NextPage<IndexProps> = ({ posts, categories }: IndexProps) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <>
      <Layout>
        <Seo title="Home" />
        <div className="mt-4 py-2 md:py-8">
          <div className="relative container flex flex-row justify-between mx-auto">
            <div className="w-full lg:w-8/12">
              <div className="flex items-center justify-between">
                <div className="border-l-8 pl-6 dark:border-gray-700 text-xl font-bold text-gray-700 md:text-2xl dark:text-white">
                  <h2>Recently Published</h2>
                </div>
              </div>
              <div className="mt-12">
                {posts
                  .slice(currentPage - 1, currentPage + 9)
                  .map(
                    ({
                      frontmatter: {
                        title,
                        description,
                        date,
                        thumbnail,
                        tag,
                        timeReading,
                      },
                      slug,
                    }) => (
                      <div
                        key={slug}
                        className="mt-6 hover:-translate-y-1 active:translate-y-0"
                      >
                        <Card
                          key={slug}
                          title={title}
                          description={description}
                          date={date}
                          thumbnail={thumbnail}
                          hrefPost="/post/[slug]"
                          asPost={`/post/${slug}`}
                          tags={tag}
                          timeReading={timeReading}
                        />
                      </div>
                    ),
                  )}
              </div>
            </div>

            <div className="sticky top-10 -mx-20 w-4/12 pr-40 hidden lg:block h-full">
              <div className="px-8 border-l-8 pl-6 dark:border-gray-700">
                <h2 className="mb-4 text-xl font-bold text-gray-700 dark:text-white">
                  Categories
                </h2>
              </div>
              <div className="px-2 rounded-lg">
                {categories.map((category) => (
                  <div className="mx-2 my-4 rounded-lg">
                    <Link href="/category/[slug]" as={`/category/${category}`}>
                      <a className="px-1 pb-0.5 pt-0 font-normal text-md items-center rounded-md bg-gray-400 text-gray-100 dark:hover:bg-gray-400 dark:bg-gray-600 dark:text-white hover:bg-gray-600 hover:no-underline">
                        {category}
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {posts.length > 10 && (
            <div className="mt-12 flex justify-center w-full">
              <div className="w-5/12">
                <Pagination
                  page={currentPage}
                  numPage={Math.floor(posts.length / 10)}
                  onChangePage={(page) => setCurrentPage(page)}
                />
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Index;
