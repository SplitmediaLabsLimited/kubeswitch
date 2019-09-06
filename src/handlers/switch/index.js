const { blue } = require('colorette');
const { prompt } = require('enquirer');
const { resolve } = require('path');
const { copyFileSync, unlinkSync, existsSync } = require('fs');
const { CONTEXTS, CURRENT_CONTEXT, CURRENT_KUBECFG_PATH, KUBECFG_PATH, saveState } = require('../../config');

module.exports = async function _switch() {
  const select = {
    type: 'select',
    name: 'context',
    message: 'Select the cluster',
    initial: CURRENT_CONTEXT,
    choices: CONTEXTS.map(({ name, value }) => ({
      message: `${blue(name)}`,
      name: value,
    })),
  };

  const { context } = await prompt(select);
  saveState(context);
  existsSync(CURRENT_KUBECFG_PATH) && unlinkSync(CURRENT_KUBECFG_PATH);

  const newContext = resolve(KUBECFG_PATH, context);
  copyFileSync(newContext, CURRENT_KUBECFG_PATH);

  console.log(`You are now using the ${blue(context.substring(4))} cluster`);
};
