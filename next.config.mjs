// next.config.mjs
const isProd = process.env.NODE_ENV === "production";
const repo = "portfolio"; // <-- your repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",              // generate static files in 'out'
  images: { unoptimized: true }, // Next/Image works without the optimizer
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true,           // helps with static hosting
};

export default nextConfig;
