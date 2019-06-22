const path = require('path');
const CRABabelLoader = path.resolve(__dirname, '../node_modules/react-scripts/node_modules/babel-loader');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve(CRABabelLoader),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
