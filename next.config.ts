/** @type {import('next').NextConfig} */
// const nextConfig = {
  
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };

// module.exports = nextConfig;











// import {NextConfig} from 'next';
// import createNextIntlPlugin from 'next-intl/plugin';
 
// const nextConfig: NextConfig = {};
 
// const withNextIntl = createNextIntlPlugin();
// export default withNextIntl(nextConfig);




import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone"
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
