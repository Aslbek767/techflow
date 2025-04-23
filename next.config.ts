/** @type {import('next').NextConfig} */

// import {NextConfig} from 'next';
// import createNextIntlPlugin from 'next-intl/plugin';
 

// const nextConfig: NextConfig = {};
 

// const withNextIntl = createNextIntlPlugin();
// export default withNextIntl(nextConfig);

/** @type {import('next').NextConfig} */

import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  output: 'standalone',
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);

