/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { GetStaticPropsResult, NextPage } from 'next';

import { Layout, Seo, Card, Pagination } from '@components/common';
import { getSortedPosts, PostType } from '@utils/posts';

interface IndexProps {
  posts: Array<PostType>;
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<IndexProps>
> {
  return {
    props: {
      posts: await getSortedPosts(),
    },
  };
}

const Index: NextPage<IndexProps> = ({ posts }: IndexProps) => (
  <>
    <Layout>
      <Seo title="Home" />
      <div className="py-2 md:py-8">
        <div className="flex justify-between container mx-auto">
          <div className="w-full lg:w-8/12">
            <div className="flex items-center justify-between">
              <div className="border-l-8 pl-6 dark:border-gray-700 text-xl font-bold text-gray-700 md:text-2xl dark:text-white">
                <h2>Recently Published</h2>
              </div>
            </div>
            {posts.map(
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
                    title={title}
                    description={description}
                    date={date}
                    thumbnail={thumbnail}
                    hrefPost="/post/[slug]"
                    asPost={`/post/${slug}`}
                    tags={tag}
                    timeReading={timeReading}
                    key={slug}
                  />
                </div>
              ),
            )}
            <div className="mt-8">
              <Pagination />
            </div>
          </div>
          <div className="-mx-20 w-4/12 hidden lg:block">
            <div className="px-8 border-l-8 pl-6 dark:border-gray-700">
              <h2 className="mb-4 text-xl font-bold text-gray-700 dark:text-white">
                Topics
              </h2>
            </div>
            <div className="mt-10 px-8 border-l-8 pl-6 dark:border-gray-700">
              <h2 className="mb-4 text-xl font-bold text-gray-700 dark:text-white">
                Categories
              </h2>
            </div>
            <div className="mt-10 px-8 border-l-8 pl-6 dark:border-gray-700">
              <h2 className="mb-4 text-xl font-bold text-gray-700 dark:text-white">
                Recent Post
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
);

export default Index;
