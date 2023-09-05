/**
 * @openformation/setup-tier-cli
 *
 * Copyright, 2023 - Open Formation GmbH, Hamburg, Germany
 *
 * All rights reserved
 */
/**
 * @author André König <andre.koenig@openformation.io>
 *
 */
import * as core from "@actions/core";
import * as tc from "@actions/tool-cache";
async function run() {
    const version = core.getInput("version");
    const tierCliDownloadUrl = `https://github.com/tierrun/tier/releases/download/v${version}/tier_${version}_linux_amd64.tar.gz`;
    const pathToTierCliTarball = await tc.downloadTool(tierCliDownloadUrl);
    const pathToTierCli = await tc.extractTar(pathToTierCliTarball);
    core.addPath(pathToTierCli);
    core.setOutput("version", version);
}
run().catch((error) => {
    process.exitCode = 1;
    core.setFailed(error.message);
});
