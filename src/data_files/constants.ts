import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Dookie Server",
  tagline: "CAPYBARAAAAAAAAAAAAAAAAAAAAAAAA",
  description: "The official website for the Dookie Server! Start your adventure here, dooks!",
  url: "https://mc.tasyadew.com",
  author: "Chad Rose",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Minecraft Server`,
  description: "The official website for the Dookie Server! Start your adventure here, dooks!",
  image: ogImageSrc,
};
