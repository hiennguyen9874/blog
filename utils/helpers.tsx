import SiteConfig from '@config/seo.json';

export const getSiteMetaData = (): typeof SiteConfig.siteMetadata =>
  SiteConfig.siteMetadata;
