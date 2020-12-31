import type { NextApiRequest, NextApiResponse } from 'next';

import { getAllSearchPost } from '@utils/posts';

const posts = getAllSearchPost();

export default (req: NextApiRequest, res: NextApiResponse) => {
  const result = req.query.q
    ? posts.filter((post) =>
        post.frontmatter.title.toLowerCase().includes(req.query.q)
      )
    : [];

  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ result }));
};
