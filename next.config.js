module.exports = {
  future: {
    webpack5: true,
    strictPostcssConfiguration: true
  },
  images: {
    domains: []
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
      require('./scripts/generate-rss');
    }

    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      });
    }

    return config;
  }
};
