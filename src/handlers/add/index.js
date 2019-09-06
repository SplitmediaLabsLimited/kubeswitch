const { cyan } = require('colorette');
const { unlinkSync, existsSync } = require('fs');
const { CURRENT_KUBECFG_PATH } = require('../../config');

async function add() {
  existsSync(CURRENT_KUBECFG_PATH) && unlinkSync(CURRENT_KUBECFG_PATH);

  console.log(`
  You're now ready to add a new context!

  After getting the credentials
      ${cyan(`gcloud container clusters get-credentials <CLUSTER_NAME> --zone <CLUSTER_ZONE> --project <PROJECT_ID>`)}

  Simply run
      ${cyan(`kubeswitch save`)}
  `);
}

module.exports = add;
