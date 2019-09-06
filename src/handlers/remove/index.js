const { red, blue } = require('colorette');
const { prompt } = require('enquirer');
const { resolve } = require('path');
const { unlinkSync, existsSync } = require('fs');
const { CONTEXTS, KUBECFG_PATH } = require('../../config');

async function remove() {
  const promptContext = {
    type: 'multiselect',
    name: 'contexts',
    message: `Select the cluster(s) to ${red('DELETE')}`,
    choices: CONTEXTS.map(({ name, value }) => ({
      message: `${blue(name)}`,
      name: value,
    })),
  };

  const promptConfirm = {
    type: 'confirm',
    name: 'confirm',
    message: 'Are you sure you want to delete those clusters?',
  };

  const { contexts, confirm } = await prompt([promptContext, promptConfirm]);

  if (!confirm || contexts.length < 1) {
    console.log('Operation cancelled!');
    return;
  }

  contexts.forEach(context => {
    const contextPath = resolve(KUBECFG_PATH, context);
    existsSync(contextPath) && unlinkSync(contextPath);
  });
}

module.exports = remove;
