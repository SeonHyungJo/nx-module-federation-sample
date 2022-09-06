// @ts-check

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'host',
  remotes: ['shop', 'cart', 'about', 'manager'],
};

module.exports = moduleFederationConfig;
