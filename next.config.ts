import type { NextConfig } from "next";
const isDev = process.env.NODE_ENV !== "production";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: isDev
      ? `
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval';
style-src 'self' 'unsafe-inline';
img-src 'self' https: data:;
font-src 'self' https: data:;
connect-src 'self' ws: http: https:;
object-src 'none';
frame-ancestors 'none';
base-uri 'self';
`.replace(/\n/g, "")
      : `
default-src 'self';
script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline';
img-src 'self' https: data:;
font-src 'self' https: data:;
connect-src 'self' https:;
object-src 'none';
frame-ancestors 'none';
base-uri 'self';
`.replace(/\n/g, ""),
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Cache-Control",
    value: "no-store",
  },
];


const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      }
    ]
  }
};

export default nextConfig;
