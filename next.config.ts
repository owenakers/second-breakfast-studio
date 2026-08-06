import type { NextConfig } from "next";

// GitHub Pages serves this repo at /second-breakfast-studio/, not the domain
// root, so every asset/link needs that prefix baked in at build time.
const basePath = process.env.GITHUB_ACTIONS ? "/second-breakfast-studio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // next/image's on-demand optimizer needs a server; GitHub Pages only
    // serves static files, so ship the pre-optimized files as-is.
    unoptimized: true,
  },
};

export default nextConfig;
