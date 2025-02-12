#!/usr/bin/env node
const semver = require('semver');
const { error } = require('@vue/cli-shared-utils');
const requiredVersion = require('@vue/cli-service/package.json').engines.node;

const { spawn } = require('child_process');

const service = function() {
  if (!semver.satisfies(process.version, requiredVersion)) {
    error(
      `You are using Node ${process.version}, but vue-cli-service ` +
        `requires Node ${requiredVersion}.\nPlease upgrade your Node version.`
    );
    process.exit(1);
  }

  const Service = require('@vue/cli-service');
  const service = new Service(process.env.VUE_CLI_CONTEXT || process.cwd());

  const rawArgv = process.argv.slice(2);
  const args = require('minimist')(rawArgv);
  const command = args._[0];

  return service.run(command, args, rawArgv).catch(err => {
    error(err);
    process.exit(1);
  });
};

service().then(result => {
  if (result && result.server) {
    // <--- server started successfully if result.server exists
    const { server, url } = result;

    let screen = process.env.SCREENSIZE ? process.env.SCREENSIZE : 'desktop';
    let child = null;

    if (server && url) {
      process.env.SCREEN_URL = url;
    }

    child = spawn(`node ./tools/screenshots/${screen}.js`, ['-lh', '/usr'], {
      shell: true,
      env: process.env
    });

    child.stdout.on('data', function(data) {
      console.log(data.toString());
    });
    child.stderr.on('data', function(data) {
      console.log(data.toString());
    });
    child.on('close', function() {
      child.stdin.end();
      process.exit(0);
    });
  } else {
    process.exit(1);
  }
});
