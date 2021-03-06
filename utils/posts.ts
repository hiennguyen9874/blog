/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import fs from 'fs';

import dynamic from 'next/dynamic';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import { MdxRemote } from 'next-mdx-remote/types';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export const postComponents = {
  p: dynamic(() => import('../components/Markdown/Paragraph')),
  h1: dynamic(() => import('../components/Markdown/Heading1')),
  h2: dynamic(() => import('../components/Markdown/Heading2')),
  h3: dynamic(() => import('../components/Markdown/Heading3')),
  h4: dynamic(() => import('../components/Markdown/Heading4')),
  h5: dynamic(() => import('../components/Markdown/Heading5')),
  h6: dynamic(() => import('../components/Markdown/Heading6')),
  blockquote: dynamic(() => import('../components/Markdown/Blockquote')),
  ul: dynamic(() => import('../components/Markdown/List')),
  ol: dynamic(() => import('../components/Markdown/OrderedList')),
  li: dynamic(() => import('../components/Markdown/ListItem')),
  table: dynamic(() => import('../components/Markdown/Table')),
  thead: dynamic(() => import('../components/Markdown/TableHead')),
  tbody: dynamic(() => import('../components/Markdown/TableBody')),
  tr: dynamic(() => import('../components/Markdown/TableRow')),
  th: dynamic(() => import('../components/Markdown/TableCellHead')),
  td: dynamic(() => import('../components/Markdown/TableCellBody')),
  code: dynamic(() => import('../components/Markdown/Code')),
  inlineCode: dynamic(() => import('../components/Markdown/InlineCode')),
  pre: dynamic(() => import('../components/Markdown/Code')),
  em: dynamic(() => import('../components/Markdown/Emphasis')),
  strong: dynamic(() => import('../components/Markdown/Strong')),
  del: dynamic(() => import('../components/Markdown/Delete')),
  hr: dynamic(() => import('../components/Markdown/ThematicBreak')),
  a: dynamic(() => import('../components/Markdown/Link')),
  img: dynamic(() => import('../components/Markdown/Image')),
  // Custom
  CustomImage: dynamic(
    () => import('../components/CustomComponent/CustomImage'),
  ),
  CustomImage2: dynamic(
    () => import('../components/CustomComponent/CustomImage2'),
  ),
};

export interface FrontMatterType {
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  tag: string[];
  timeReading: number;
}

const getPostsFolders = (): Array<{
  directory: string;
  filename: string;
}> => {
  // Get all posts folders located in `content/posts`
  const postsFolders = fs
    .readdirSync(`${process.cwd()}/content/posts`)
    .map((folderName) => ({
      directory: folderName,
      filename: `${folderName}.mdx`,
    }));

  return postsFolders;
};

// Get day in format: Month day, Year. e.g. April 19, 2020
const getFormattedDate = (date: Date): string => {
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return formattedDate;
};

export interface PostType {
  slug: string;
  frontmatter: FrontMatterType;
  excerpt: string;
  content: string;
  source: MdxRemote.Source;
}

const getFrontMatter = (data: { [key: string]: any }): FrontMatterType => ({
  title: data.title,
  description: data.description,
  date: getFormattedDate(data.date),
  thumbnail: data.thumbnail,
  tag: data.tag.split(','),
  timeReading: data.timeReading,
});

export const getSortedPosts = async (): Promise<Array<PostType>> => {
  const postFolders = getPostsFolders();

  const posts = await Promise.all(
    postFolders.map(async ({ filename, directory }) => {
      const markdownWithMetadata = fs
        .readFileSync(`content/posts/${directory}/${filename}`)
        .toString();

      // Parse markdown, get frontmatter data, excerpt and content.
      const { content, data, excerpt } = matter(markdownWithMetadata);

      const frontmatter = getFrontMatter(data);

      // Remove .mdx file extension from post name
      const slug = encodeURIComponent(filename.replace('.mdx', ''));

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { date, ...otherData } = data;

      const mdxSource = await renderToString(content, {
        components: postComponents,
        mdxOptions: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        scope: otherData,
      });

      return {
        slug,
        frontmatter,
        excerpt,
        content,
        source: mdxSource,
      };
    }),
  );
  return posts.sort(
    (a, b) =>
      Number(new Date(b.frontmatter.date)) -
      Number(new Date(a.frontmatter.date)),
  );
};

export const getAllSearchPost = (): Array<{
  slug: string;
  frontmatter: FrontMatterType;
}> => {
  const postFolders = getPostsFolders();

  const posts = postFolders.map(({ filename, directory }) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/posts/${directory}/${filename}`)
      .toString();

    // Parse markdown, get frontmatter data, excerpt and content.
    const { data } = matter(markdownWithMetadata);

    const frontmatter = getFrontMatter(data);

    // Remove .mdx file extension from post name
    const slug = encodeURIComponent(filename.replace('.mdx', ''));

    return {
      slug,
      frontmatter,
    };
  });
  return posts.sort(
    (a, b) =>
      Number(new Date(b.frontmatter.date)) -
      Number(new Date(a.frontmatter.date)),
  );
};

export const getPostsSlugs = (): {
  params: {
    slug: string;
  };
}[] => {
  const postFolders = getPostsFolders();

  const paths = postFolders.map(({ filename }) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return paths;
};

export interface PostDataType {
  frontmatter: FrontMatterType;
  post: {
    content: string;
    excerpt: string;
    source: MdxRemote.Source;
  };
  previousPost: {
    slug: string;
    frontmatter: FrontMatterType;
    excerpt: string;
    content: string;
  };
  nextPost: {
    slug: string;
    frontmatter: FrontMatterType;
    excerpt: string;
    content: string;
  };
}

export const getPostBySlug = async (slug: string): Promise<PostDataType> => {
  const posts = await getSortedPosts();

  const postIndex = posts.findIndex(({ slug: postSlug }) => postSlug === slug);

  const { frontmatter, content, source, excerpt } = posts[postIndex];

  const previousPost = posts[postIndex + 1];
  const nextPost = posts[postIndex - 1];

  return {
    frontmatter,
    post: { content, excerpt, source },
    previousPost,
    nextPost,
  };
};

export const getPostsCategories = async (): Promise<
  {
    params: {
      slug: string;
    };
  }[]
> => {
  const postFolders = getPostsFolders();

  const posts = await Promise.all(
    postFolders.map(async ({ filename, directory }) => {
      const markdownWithMetadata = fs
        .readFileSync(`content/posts/${directory}/${filename}`)
        .toString();

      // Parse markdown, get frontmatter data, excerpt and content.
      const { content, data, excerpt } = matter(markdownWithMetadata);

      const frontmatter = getFrontMatter(data);

      // Remove .mdx file extension from post name
      const slug = encodeURIComponent(filename.replace('.mdx', ''));

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { date, ...otherData } = data;

      const mdxSource = await renderToString(content, {
        components: postComponents,
        mdxOptions: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        scope: otherData,
      });

      return {
        slug,
        frontmatter,
        excerpt,
        content,
        source: mdxSource,
      };
    }),
  );

  let listTag: string[] = [];

  posts.forEach((item) => {
    item.frontmatter.tag.forEach((tag) => {
      if (!listTag.includes(tag)) {
        listTag.push(tag);
      }
    });
  });

  listTag = listTag.sort();

  return listTag.map((tag) => ({
    params: {
      slug: tag,
    },
  }));
};

export const getPostsByCategory = async (
  category: string,
): Promise<
  {
    slug: string;
    frontmatter: FrontMatterType;
  }[]
> => {
  const posts = await getSortedPosts();

  return posts
    .filter((value) => value.frontmatter.tag.includes(category))
    .map(({ frontmatter, slug }) => ({
      slug,
      frontmatter,
    }));
};
