module.exports = {
    env: {
        API_KEY: process.env.API_KEY,
    },
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
      });

      return config;
    },
};
