/* eslint-disable import/no-extraneous-dependencies */
const spawn = require('cross-spawn');
const ngrok = require('ngrok');

const PORT = process.env.PORT || 3000;
const args = process.argv.slice(3);

async function start() {
  try {
    const tunnelUrl = await ngrok.connect(PORT);
    process.env.NGROK_URL = tunnelUrl;
    console.log(`Tunnel opened to ${tunnelUrl}`);
    console.log('This URL is available via the NGROK_URL environment variable');
  } catch (e) {
    console.log('There was a problem opening the tunnel.');
    console.log(e.message || e);
    process.exit(1);
  }

  const result = spawn.sync(
    'nodemon',
    ['./support/devserver.js'].concat(args),
    {
      stdio: 'inherit',
    }
  );

  if (result.signal) {
    process.exit(1);
  }
  process.exit(result.status);
}

start();
