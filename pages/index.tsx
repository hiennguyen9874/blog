/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { GetStaticPropsResult, NextPage } from 'next';

import Seo from '@components/Seo';
import Layout from '@components/Layout';
import { Card } from '@components/common';
import Pagination from '@components/Pagination';
import Categories from '@components/RightBar/Categories';
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
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Seo title="Home" />

      <Layout>
        <>
          <div className="py-8 md:py-12 lg:py-16 lg:grid lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="md:border-l-8 md:pl-6 text-xl md:text-2xl font-bold text-heading-light dark:text-heading-dark border-omega-light dark:border-omega-dark">
                <h2 className="text-center md:text-left">Recently Published</h2>
              </div>

              <div className="mt-8 md:mt-12 lg:mt-16">
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
                      <div key={slug} className="py-2">
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

            <div className="hidden lg:block sticky">
              <div className="border-l-8 pl-6 text-xl md:text-2xl font-bold text-heading-light dark:text-heading-dark border-omega-light dark:border-omega-dark">
                Categories
              </div>
              <div className="mt-16">
                <Categories categories={categories} />
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
        </>
      </Layout>
    </>
  );
};

export default Index;
