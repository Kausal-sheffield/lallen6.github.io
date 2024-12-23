const path = require("path");
const {
  override,
  babelInclude,
  addBabelPresets,
  addBabelPlugin,
  removeModuleScopePlugin
} = require('customize-cra');

const overrideConfig = override(
  // Remove module scope plugin to allow importing modules from outside src/
  removeModuleScopePlugin(),

  // Include both src and tsparticles packages
  babelInclude([
    path.resolve('src'),
    path.resolve('node_modules/@tsparticles'),
    path.resolve('node_modules/tsparticles'),
  ]),

  // Add preset-env with proper configuration
  addBabelPresets(
    ['@babel/preset-env', {
      targets: 'defaults',
      bugfixes: true,
    }]
  ),

  // Add all necessary plugins for modern JavaScript features
  addBabelPlugin('@babel/plugin-proposal-optional-chaining'),
  addBabelPlugin('@babel/plugin-proposal-nullish-coalescing-operator'),
  addBabelPlugin('@babel/plugin-proposal-logical-assignment-operators'),
  addBabelPlugin('@babel/plugin-proposal-class-properties'),
  addBabelPlugin('@babel/plugin-syntax-nullish-coalescing-operator')
);

module.exports = {
  paths: function (paths, env) {
    paths.appPublic = path.resolve(__dirname, "docs");
    paths.appHtml = path.resolve(__dirname, "docs/index.html");
    return paths;
  },
  webpack: function(config, env) {
    // Ensure tsparticles packages are transpiled
    if (config.module) {
      const babelLoader = config.module.rules.find(rule => rule.loader && rule.loader.includes('babel-loader'));
      if (babelLoader) {
        if (!Array.isArray(babelLoader.include)) {
          babelLoader.include = [babelLoader.include];
        }
        babelLoader.include.push(
          path.resolve(__dirname, 'node_modules/@tsparticles'),
          path.resolve(__dirname, 'node_modules/tsparticles')
        );
      }
    }
    return overrideConfig(config, env);
  }
};