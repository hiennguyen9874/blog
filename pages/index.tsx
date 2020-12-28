import React from 'react';
import { GetStaticPropsResult, NextPage } from 'next';
import Link from 'next/link';

import { Layout, Bio, SEO } from '@components/common';

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
      <SEO title="All posts" />
      <Bio className="my-14" />
      {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article key={slug}>
          <header className="mb-2">
            <h3 className="mb-2">
              <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                <a className="text-4xl font-bold text-yellow-600 font-display">
                  {title}
                </a>
              </Link>
            </h3>
            <span className="text-sm">{date}</span>
          </header>
          <section>
            <p className="mb-8 text-lg">{description}</p>
          </section>
        </article>
      ))}
    </Layout>
  </>
);

export default Index;
