import React from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import hydrate from 'next-mdx-remote/hydrate';

import { Bio, Layout, Seo, Comments } from '@components/common';
import {
  getPostBySlug,
  getPostsSlugs,
  postComponents,
  PostDataType,
} from '@utils/posts';
import { getDisqusData } from '@utils/helpers';

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
        slug,
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
  slug: string;
}

const PostPage: NextPage<PostPageProps> = ({
  posts,
  slug,
}: PostPageProps): JSX.Element => {
  const { frontmatter, post, previousPost, nextPost } = posts;
  const content = hydrate(post.source, { components: postComponents });
  return (
    <Layout>
      <Seo title={frontmatter.title} description={frontmatter.description} />

      <div className="py-8">
        <header className="mt-10 mb-8">
          <h1 className="text-6xl font-semibold text-gray-800 leading-tight dark:text-white">
            {frontmatter.title}
          </h1>
          <div className="flex flex-row items-center">
            <p className="text-sm font-bold text-gray-500 dark:text-gray-300">
              {frontmatter.date}
            </p>
            <span className="mx-2 w-1 h-1 rounded-full bg-opacity-50 bg-red-500 " />
            <div className="flex flex-row space-x-1 items-center">
              <div className="flex flex-row text-red-500">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                </svg>
              </div>
              <div className="ml-2 font-bold text-red-500">
                {frontmatter.timeReading} min read
              </div>
            </div>
          </div>
        </header>

        <div className="relative container flex flex-row justify-between mx-auto">
          <div className="w-full lg:w-8/12">
            <div className="px-4 py-1 shadow-sm bg-white rounded-xl dark:bg-gray-700">
              <main>{content}</main>

              <hr className="mt-10" />

              <footer className="mt-10">
                <Bio className="" />
              </footer>

              <div className="mt-10">
                <Comments
                  post={{
                    id: slug,
                    title: frontmatter.title,
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    url: `${getDisqusData().siteUrl}/post/${slug}`,
                  }}
                />
              </div>

              <hr className="mt-10" />

              <nav className="mt-10 mb-4 flex flex-row justify-between">
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

          <div className="sticky top-10 -mx-20 hidden lg:block w-4/12 h-full">
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
