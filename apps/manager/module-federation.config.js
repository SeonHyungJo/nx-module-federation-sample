// @ts-check

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'manager',
  exposes: {
    './Module': './src/remote-entry.ts',
    './test': './src/app/test1.tsx',
  },
};

module.exports = moduleFederationConfig;
