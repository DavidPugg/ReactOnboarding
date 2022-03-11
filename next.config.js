module.exports = {
    env: {
        API_KEY: process.env.API_KEY,
    },
    webpack(config, options) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
};
