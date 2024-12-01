/** @type { import('@storybook/react-webpack5').StorybookConfig } */

const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  // webpackFinal: async (config) => {
  //   config.module.rules = [{
  //     test: /\.(?:js|jsx|mjs|cjs)$/,
  //     exclude: /node_modules/,
  //     use: {
  //       loader: 'babel-loader',
  //       options: {
  //         presets: [
  //           ['@babel/preset-env', { targets: "defaults" }]
  //         ]
  //       }
  //     }
  //   }];
  //   config.plugins = [
  //     resolve(),
  //     commonjs(),
  //     babel({
  //       babelHelpers: 'bundled',
  //       exclude: 'node_modules/**',
  //       presets: ['@babel/preset-env', '@babel/preset-react'],
  //     }),
  //     // replace({
  //     //   'process.env.NODE_ENV': JSON.stringify('development'),
  //     //   preventAssignment: true,
  //     // }),
  //   ];
  //   return config;
  // },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
export default config;
