import React from 'react';
import {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
} from 'next';
import Link from 'next/link';
import hydrate from 'next-mdx-remote/hydrate';

import { Bio, Layout, SEO } from '@components/common';
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
  } else {
    throw Error(`Invalid slug: ${slug}`);
  }
};

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
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <article>
        <header className="mb-8">
          <h1 className="mb-2 text-6xl font-black leading-none font-display">
            {frontmatter.title}
          </h1>
          <p className="text-sm">{frontmatter.date}</p>
        </header>
        <main>{content}</main>
        <hr className="mt-4" />
        <footer>
          <Bio className="mt-8 mb-16" />
        </footer>
      </article>

      <nav className="flex flex-wrap justify-between mb-10">
        {previousPost ? (
          <Link href={'/post/[slug]'} as={`/post/${previousPost.slug}`}>
            <a className="text-lg font-bold">
              ← {previousPost.frontmatter.title}
            </a>
          </Link>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Link href={'/post/[slug]'} as={`/post/${nextPost.slug}`}>
            <a className="text-lg font-bold">{nextPost.frontmatter.title} →</a>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </Layout>
  );
};

export default PostPage;
