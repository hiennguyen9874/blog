import SiteConfig from '@config/seo.json';
import DisqusConfig from '@config/disqus.json';

export const getSiteMetaData = (): typeof SiteConfig.siteMetadata =>
  SiteConfig.siteMetadata;

export const getDisqusData = (): typeof DisqusConfig => DisqusConfig;

export const getPublicPathImage = (src: string): string => {
  const srcFormatted = src[0] === '/' ? src.slice(1) : src;
  return `public/${srcFormatted}`;
};
