/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const fs = require('fs');

const matter = require('gray-matter');

const getPostsFolders = () => {
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
const getFormattedDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return formattedDate;
};

const getAllSearchPost = () => {
  const postFolders = getPostsFolders();

  const posts = postFolders.map(({ filename, directory }) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/posts/${directory}/${filename}`)
      .toString();

    // Parse markdown, get frontmatter data, excerpt and content.
    const { content, data, excerpt } = matter(markdownWithMetadata);

    const frontmatter = {
      title: data.title,
      description: data.description,
      date: getFormattedDate(data.date),
      thumbnail: data.thumbnail,
      tag: data.tag.split(','),
    };

    // Remove .mdx file extension from post name
    const slug = filename.replace('.mdx', '');

    return {
      slug,
      frontmatter,
      excerpt,
      content,
    };
  });
  return posts.sort(
    (a, b) =>
      Number(new Date(b.frontmatter.date)) -
      Number(new Date(a.frontmatter.date)),
  );
};

const postData = () =>
  `export const posts = ${JSON.stringify(getAllSearchPost())}`;

try {
  fs.readdirSync('cache');
} catch (e) {
  fs.mkdirSync('cache');
}

fs.writeFile('cache/data.js', postData(), (err) => {
  if (err) throw Error('Error when write data into cache file!');
});
