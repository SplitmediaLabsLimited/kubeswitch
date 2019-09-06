const { prompt } = require('enquirer');
const { resolve } = require('path');
const { copyFileSync } = require('fs');
const { CURRENT_KUBECFG_PATH, KUBECFG_PATH } = require('../../config');

async function save() {
  const promptContext = {
    type: 'input',
    message: 'Enter a name for this context',
    name: 'context',
  };

  const { context } = await prompt(promptContext);
  const contextFilename = `env_${context}`;

  const newContext = resolve(KUBECFG_PATH, contextFilename);
  copyFileSync(CURRENT_KUBECFG_PATH, newContext);
}

module.exports = save;
