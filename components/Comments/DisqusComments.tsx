import { DiscussionEmbed } from 'disqus-react';

import { getDisqusData } from '@utils/helpers';

interface DisqusCommentsProps {
  post: {
    url: string;
    id: string;
    title: string;
  };
}

const DisqusComments = ({ post }: DisqusCommentsProps): JSX.Element => {
  const disqusShortname = getDisqusData().shortName;
  const disqusConfig = {
    url: post.url,
    identifier: post.id,
    title: post.title,
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
