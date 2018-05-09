# Alexa Skill Boilerplate

Boilerplate for creating an Alexa skill using the Amazon Skills Kit SDK. Includes a simple http server and tunnel to allow local testing via the [Alexa Skills Kit (ASK) Developer Console][ask].

## Project Structure

```
alexa-skill-boilerplate
├── README.md
├── index.js
├── models
│   └── en-US.json
├── package-lock.json
├── package.json
├── src
│   ├── messages.json
│   └── utils.js
└── support
    ├── devserver.js
    └── tunnel.js
```


#### `README.md`

This README file

#### `index.js`

Defines and exports the skill's main handler

#### `models/`

Directory of interaction models for the skill, by locale

#### `src/messages.json`

Contains message strings used in responses

#### `src/utils.js`

A collection of helpful utilities for building the response

#### `support/devserver.js`

HTTP server used in local development

#### `support/tunnel.js`

Helper script to open the [ngrok][] tunnel

## Usage / Development

To start, clone or fork this repo. You will also need to go through the process of creating a skill via the [Alexa Skills Kit (ASK) Developer Console][ask].

### Define the Interaction Model

The interaction model defines the different intents that the skill will handle. Each intent has a `name`, a `samples` array containing sample utterances a user might use to invoke the intent, and an optional `slots` array. Slots can be used to define arguments to an intent that give Alexa more information about that request.

### Write the Handler

The code for the handler is found in `index.js`. This is where the skill is created, intent handlers are defined, and the main handler is exported.

### Testing

Follow these steps to use the [ASK Developer Console][ask] to test the skill locally.

#### Open the Tunnel

Using [ngrok][], we create an HTTPS tunnel to our localhost on port 3000. Run the following command and be sure to copy the URL that is generated.

```
$ npm run tunnel
```

#### Start Development Server

Run this in a separate terminal window. It will prompt you to enter the tunnel URL from the previous step. Once you do so, the script will set the `NGROK_URL` environment variable to this URL and start a simple [koa][] server listening for POST requests on port 3000. The server will automatically restart when changes are detected.

```
$ npm start
```

##### A Note about Static Assets

The local dev server will serve any files in the `src` folder. This can be useful if your handler needs to access local assets. Combine this with the `NGROK_URL` environment variable to create a path to the required file. For example, if your skill response includes a card with an image, you can use something like `https://578b08d6.ngrok.io/assets/logo.png` as the URL and it will serve that image from your local `src/assets` folder.

#### Set the Endpoint

Head back to the [ASK Developer Console][ask] and click on `Endpoint` in the sidebar. Selecte `HTTPS` as the Service Endpoint Type, then paste the tunnel URL into the `Default Region` box. Be sure to set the dropdown to "My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority." and then click `Save Endpoints`.

#### Use the Simulator to Make Requests

If all goes well you should now be able to use the [ASK Developer Console][ask] simulator to generate requests that will be handled by your locally running server.


[koa]: http://koajs.com/
[ngrok]: https://ngrok.com/
[ask]: https://developer.amazon.com/alexa/console/ask
