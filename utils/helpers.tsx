import SiteConfig from '@config/seo.json';

// eslint-disable-next-line import/prefer-default-export
export const getSiteMetaData = (): typeof SiteConfig.siteMetadata =>
  SiteConfig.siteMetadata;
