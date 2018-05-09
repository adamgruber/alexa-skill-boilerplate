/* eslint-disable import/no-extraneous-dependencies */
const ngrok = require('ngrok');

const PORT = process.env.PORT || 3000;

async function openTunnel() {
  // Open ngrok tunnel
  const tunnelUrl = await ngrok.connect(PORT);
  console.log(
    `Tunnel opened to ${tunnelUrl}\nEnsure your Alexa skill is pointed here to enable local testing.`
  );
}

openTunnel();
