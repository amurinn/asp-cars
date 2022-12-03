/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  sassOptions: {
    includePaths: ['./components/*'],
    prependData: `@import "./styles/variables.scss";`
  }
};

module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
};

module.exports = nextConfig