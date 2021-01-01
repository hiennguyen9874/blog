import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllSearchPost } from '@utils/posts';
import * as cache from '../../cache/data';

const posts =
  process.env.NODE_ENV === 'production' ? cache.posts : getAllSearchPost();

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
