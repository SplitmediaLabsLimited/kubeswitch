const { resolve } = require('path');
const program = require('caporal');
const { version } = require(resolve(__dirname, '../package.json'));

require('./catch-all');

if (!process.argv[2]) {
  require('./handlers/switch')();
  return true;
}

program.version(version);
program.command('add', 'Preparation before saving a new context').action(require('./handlers/add'));
program.command('remove', 'Remove a context').action(require('./handlers/remove'));
program.command('save', 'Save the current config as a name').action(require('./handlers/save'));
program.command('switch', 'Switch context').action(require('./handlers/switch'));
program.parse(process.argv);
