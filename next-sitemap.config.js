/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.BASE_URL || "http://localhost:3000",
  generateRobotsTxt: true,
  changefreq: "yearly",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot-Image", disallow: "/private-images/" },
    ],
  },
};

export default config;
