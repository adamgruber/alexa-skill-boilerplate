#!/bin/sh

# Prompt for the ngrok tunnel URL
printf "Tunnel URL: "
read NGROK_URL

# Set the environment var and start the dev server
export NGROK_URL=$NGROK_URL && nodemon ./devserver.js
