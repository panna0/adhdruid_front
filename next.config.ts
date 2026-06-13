import type { NextConfig } from 'next';
import path from 'path';

const stylesPath = path.join(__dirname, 'src/styles/variables').replace(/\\/g, '/');

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `@use "${stylesPath}" as *;`,
  },
};

export default nextConfig;
