/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import fs from 'fs';
import React from 'react';
import dynamic from 'next/dynamic';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import { MdxRemote } from 'next-mdx-remote/types';

// import Image from 'next/image'

// interface BasicProps {
//   children: React.ReactNode;
// }

// interface CodeSandBoxProps {
//   src: string;
//   title: string;
// }

export const postComponents = {
  // a: dynamic(() => import('../components/CustomLink')),
  // p: ({ children }: BasicProps) => (
  //   <p className="text-base leading-7 text-justify mb-3">{children}</p>
  // ),
  // h1: ({ children }: BasicProps) => (
  //   <h1 className="font-bold text-4xl">{children}</h1>
  // ),
  // h2: ({ children }: BasicProps) => (
  //   <h2 className="font-bold text-3xl">{children}</h2>
  // ),
  // h3: ({ children }: BasicProps) => (
  //   <h3 className="font-bold text-2xl">{children}</h3>
  // ),
  // h4: ({ children }: BasicProps) => (
  //   <h4 className="font-bold text-xl">{children}</h4>
  // ),
  // h5: ({ children }: BasicProps) => (
  //   <h5 className="font-bold text-lg">{children}</h5>
  // ),
  // h6: ({ children }: BasicProps) => (
  //   <h6 className="font-bold text-base">{children}</h6>
  // ),
  // hr: () => <hr className="my-3" />,
  // blockquote: ({ children }: BasicProps) => {
  //   return (
  //     <blockquote className="italic text-2xl border-l-4 -ml-4 pl-3">
  //       {children}
  //     </blockquote>
  //   );
  // },
  // ul: ({ children }: BasicProps) => (
  //   <ul className="list-disc list-inside">{children}</ul>
  // ),
  // ol: ({ children }: BasicProps) => (
  //   <ol className="list-decimal list-inside">{children}</ol>
  // ),
  // em: ({ children }: BasicProps) => <span className="italic">{children}</span>,
  // strong: ({ children }: BasicProps) => (
  //   <span className="font-bold">{children}</span>
  // ),
  // inlineCode: ({ children }: BasicProps) => (
  //   <code className="bg-bgCodeColor px-1">{children}</code>
  // ),
  // InlineCode: ({ children }: BasicProps) => (
  //   <code className="bg-bgCodeColor px-1">{children}</code>
  // ),
  // // img: dynamic(() => import('../components/ImageComponent')),
  // img: Image,
  // code: dynamic(() => import('../components/CodeBlock')),
  // CodeSandBox: ({ src, title }: CodeSandBoxProps) => (
  //   <iframe
  //     src={src}
  //     title={title}
  //     className="w-full border-0"
  //     style={{ height: '500px' }}
  //     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  //     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  //   />
  // ),
  // table: ({ children }: BasicProps) => (
  //   <table className="table-auto">{children}</table>
  // ),
  // th: ({ children }: BasicProps) => <th className="px-4 py-2">{children}</th>,
  // td: ({ children }: BasicProps) => (
  //   <td className="border px-4 py-2">{children}</td>
  // ),
  // tr: ({ children }: BasicProps) => (
  //   <tr className="even:bg-gray-100">{children}</tr>
  // ),
  // TextCenter: ({ children }: BasicProps) => (
  //   <div className="text-center">{children}</div>
  // ),
  TestComponent: dynamic(() => import('../components/TestComponent')),
};

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
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return formattedDate;
};

export interface PostType {
  slug: string;
  frontmatter: {
    title: any;
    description: any;
    date: string;
  };
  excerpt: string;
  content: string;
  source: MdxRemote.Source;
}

export const getSortedPosts = async (): Promise<Array<PostType>> => {
  const postFolders = getPostsFolders();

  const posts = await Promise.all(
    postFolders.map(async ({ filename, directory }) => {
      const markdownWithMetadata = fs
        .readFileSync(`content/posts/${directory}/${filename}`)
        .toString();

      // Parse markdown, get frontmatter data, excerpt and content.
      const { content, data, excerpt } = matter(markdownWithMetadata);

      const frontmatter = {
        title: data.title,
        description: data.description,
        date: getFormattedDate(data.date),
      };

      // Remove .mdx file extension from post name
      const slug = filename.replace('.mdx', '');

      const { date, ...otherData } = data;

      const mdxSource = await renderToString(content, {
        components: postComponents,
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
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
    })
  );
  return posts.sort(
    (a, b) =>
      Number(new Date(b.frontmatter.date)) -
      Number(new Date(a.frontmatter.date))
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
  frontmatter: {
    title: string;
    description: string;
    date: string;
  };
  post: {
    content: string;
    excerpt: string;
    source: MdxRemote.Source;
  };
  previousPost: {
    slug: string;
    frontmatter: {
      title: any;
      description: any;
      date: string;
    };
    excerpt: string;
    content: string;
  };
  nextPost: {
    slug: string;
    frontmatter: {
      title: any;
      description: any;
      date: string;
    };
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
