import type { NextConfig } from "next";
import { i18n } from "./next-i18next.config";

const nextConfig: NextConfig = {
  reactStrictMode: true, // optional but recommended
  i18n, // add your i18n config here
};

export default nextConfig;
