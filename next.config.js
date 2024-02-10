/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: true,
  },
  async rewrites() {
    return [
      {
        source: "/summer-dev-2023",
        destination: "/summer-dev-2023/index.html",
      },
      {
        source: "/summer-dev-2022",
        destination: "/summer-dev-2022/index.html",
      },
      {
        source: "/summer-dev-2021",
        destination: "/summer-dev-2021/index.html",
      },
      {
        source: "/winter-dev-2023",
        destination: "/winter-dev-2023/index.html",
      },
      {
        source: "/winter-dev-2022",
        destination: "/winter-dev-2022/index.html",
      },
    ];
  },
};

module.exports = nextConfig;
