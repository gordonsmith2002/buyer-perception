const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/invisible-pipeline",
        destination: "/#invisible-pipeline",
        permanent: false,
      },
      {
        source: "/how-it-works",
        destination: "/#how-it-works",
        permanent: false,
      },
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
      { source: "/b2b", destination: "/", permanent: false },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/interview-:edition(\\d{3})",
        destination: "/editions/:edition",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/partners",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/partners/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  outputFileTracingIncludes: {
    "/legal/privacy": ["./content/legal/privacy-policy.md"],
    "/legal/terms-v1": ["./content/legal/terms-v1.md"],
  },
};

module.exports = nextConfig;
