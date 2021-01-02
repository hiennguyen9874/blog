import SiteConfig from '@config/seo.json';

export const getSiteMetaData = (): typeof SiteConfig.siteMetadata =>
  SiteConfig.siteMetadata;

export const getPublicPathImage = (src: string): string => {
  const srcFormatted = src[0] === '/' ? src.slice(1) : src;
  return `public/${srcFormatted}`;
};
