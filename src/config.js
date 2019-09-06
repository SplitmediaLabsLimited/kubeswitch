require('dotenv').config({ silent: true });

const { existsSync, readdirSync, readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const KUBECFG_PATH = resolve(process.env.HOME || process.env.USERPROFILE, '.kube');

const CONTEXTS = readdirSync(KUBECFG_PATH)
  .filter(f => f.startsWith('env_'))
  .map(value => ({
    name: value.substring(4),
    value,
  }));

const stateFile = resolve(KUBECFG_PATH, '.kubeswitch');
const stateFileExists = existsSync(stateFile);

const CURRENT_CONTEXT = stateFileExists ? readFileSync(stateFile, 'utf8') : null;

const CURRENT_KUBECFG_PATH = resolve(KUBECFG_PATH, 'config');

const saveState = val => writeFileSync(stateFile, val);

module.exports = {
  CONTEXTS,
  CURRENT_CONTEXT,
  CURRENT_KUBECFG_PATH,
  KUBECFG_PATH,
  saveState,
};
