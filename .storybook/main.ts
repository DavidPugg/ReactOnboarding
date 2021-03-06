import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

module.exports = {
    stories: ['../**/**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: '@storybook/react',
    webpackFinal: async (config: { resolve: { alias: any; plugins: TsconfigPathsPlugin[]; }; module: { rules: { test: RegExp; use: string[]; include: string; }[]; }; }) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@css": path.resolve(__dirname, "../css"),
        "@components": path.resolve(__dirname, "../components"),
        "@assets": path.resolve(__dirname, "../public"),
      };
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        });
        config.resolve.plugins.push(new TsconfigPathsPlugin());
        return config;
    },
};
