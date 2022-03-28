const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
    publicRuntimeConfig: {
        apiKey: process.env.API_KEY
    },
    images: {
        domains: ['image.tmdb.org'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            type: 'asset/resource',
        });

        return config;
    },
});
