/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.GITHUB_PAGES === 'true';
const [repositoryOwner = 'Ad4mrr', repositoryName = 'swisstek1'] = (process.env.GITHUB_REPOSITORY ?? 'Ad4mrr/swisstek1').split('/');
const basePath = isGitHubPages ? `/${repositoryName}` : '';
const siteUrl = isGitHubPages ? `https://${repositoryOwner.toLowerCase()}.github.io/${repositoryName}` : 'https://swisstekceylon.com';

const nextConfig = {
  reactStrictMode: true,
  output: isGitHubPages ? 'export' : undefined,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: isGitHubPages,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
  images: {
    unoptimized: isGitHubPages,
    remotePatterns: [
      { protocol: 'https', hostname: 'swisstekceylon.com' },
      { protocol: 'https', hostname: 'www.swisstekaluminium.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },
};

export default nextConfig;
