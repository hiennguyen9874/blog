import React from 'react';
import Head from 'next/head';

import { getSiteMetaData } from '@utils/helpers';

interface SeoProps {
  title: string;
  description?: string;
}

const Seo = ({ title, description }: SeoProps): JSX.Element => {
  const siteMetadata = getSiteMetaData();

  const metaDescription = description || siteMetadata.description;

  return (
    <Head>
      <title>
        {title} | {siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta
        name="twitter:creator"
        content={siteMetadata.social.twitter.username}
      />
      <link rel="icon" type="image/png" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon/favicon.ico" />
    </Head>
  );
};

Seo.defaultProps = {
  description: '',
};

export default Seo;
