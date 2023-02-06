module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  env: {
    CLOUDINARY_CLOUD_NAME: 'dvvgwzzwu',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placekitten.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
