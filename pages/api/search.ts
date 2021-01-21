import type { NextApiRequest, NextApiResponse } from 'next';

import { getAllSearchPost } from '@utils/posts';

import * as cache from '../../cache/data';

const posts =
  process.env.NODE_ENV === 'production' ? cache.posts : getAllSearchPost();

interface RDataType {
  result: ReturnType<typeof getAllSearchPost>;
}

export default (req: NextApiRequest, res: NextApiResponse<RDataType>): void => {
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  const result = req.query.q
    ? posts.filter((post) =>
        post.frontmatter.title.toLowerCase().includes(req.query.q as string),
      )
    : [];
  res.end(JSON.stringify({ result }));
};
