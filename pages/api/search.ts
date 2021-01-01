import type { NextApiRequest, NextApiResponse } from 'next';

import { getAllSearchPost } from '@utils/posts';

const posts =
  process.env.NODE_ENV === 'production'
    ? require('../../cache/data').posts
    : getAllSearchPost();

interface RDataType {
  result: ReturnType<typeof getAllSearchPost>;
}

export default (req: NextApiRequest, res: NextApiResponse<RDataType>): void => {
  const result = req.query.q
    ? posts.filter((post) =>
        post.frontmatter.title.toLowerCase().includes(req.query.q)
      )
    : [];

  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ result }));
};
