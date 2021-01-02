import React from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import hydrate from 'next-mdx-remote/hydrate';

import { Bio, Layout, Seo } from '@components/common';
import {
  getPostBySlug,
  getPostsSlugs,
  postComponents,
  PostDataType,
} from '@utils/posts';

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  if (typeof slug === 'string') {
    const postData = await getPostBySlug(slug);

    if (!postData.previousPost) {
      postData.previousPost = null;
    }

    if (!postData.nextPost) {
      postData.nextPost = null;
    }

    return {
      props: {
        posts: postData,
      },
    };
  }
  throw Error(`Invalid slug`);
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostsSlugs();

  return {
    paths,
    fallback: false,
  };
};

interface PostPageProps {
  posts: PostDataType;
}

const PostPage: NextPage<PostPageProps> = ({ posts }: PostPageProps) => {
  const { frontmatter, post, previousPost, nextPost } = posts;
  const content = hydrate(post.source, { components: postComponents });
  return (
    <Layout>
      <Seo title={frontmatter.title} description={frontmatter.description} />

      <div className="py-8">
        <div className="mt-10">
          <header className="mb-8">
            <h1 className="text-6xl font-semibold text-gray-800 leading-tight dark:text-white">
              {frontmatter.title}
            </h1>
            <p className="text-sm">{frontmatter.date}</p>
          </header>
        </div>

        <div className="flex justify-between container mx-auto">
          <div className="w-full lg:w-8/12">
            <div className="px-4 py-1 bg-white rounded-xl dark:bg-gray-700">
              <main>{content}</main>
              <hr className="mt-4" />
              <footer>
                <Bio className="mt-8 mb-16" />
              </footer>

              <nav className="flex flex-row justify-between mb-10">
                {previousPost ? (
                  <Link href="/post/[slug]" as={`/post/${previousPost.slug}`}>
                    <a className="text-lg font-bold">
                      ← {previousPost.frontmatter.title}
                    </a>
                  </Link>
                ) : (
                  <div />
                )}
                {nextPost ? (
                  <Link href="/post/[slug]" as={`/post/${nextPost.slug}`}>
                    <a className="text-lg font-bold">
                      {nextPost.frontmatter.title} →
                    </a>
                  </Link>
                ) : (
                  <div />
                )}
              </nav>
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
  );
};

export default PostPage;
