const Alexa = require('ask-sdk');
const messages = require('./src/messages.json');

/* Replace with skill id from Alexa developer console */
const alexAppId = 'amzn1.ask.skill.unique-skill-id';

/* This will be displayed at the top of card responses */
const skillName = 'Alexa Skill';

let skill;

/**
 * Handler scaffold object. Contains two methods used in processing requests.
 * https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs/wiki/Request-Processing
 *
 * Argument passed to all request handlers, request and response interceptors, and error handlers.
 * Exposes various entities useful in request processing.
 * @typedef {object} HandlerInput
 * @property {object} requestEnvelope - Entire request body sent to skill
 * @property {object} attributesManager - Provides access to request, session, and persistent attributes
 * @property {object} serviceClientFactory - Constructs service clients capable of calling Alexa APIs
 * @property {object} responseBuilder Helper - function to build responses
 * @property {object} context - Provides an optional, context object passed in by the host container
 */
const IntentHandler = {
  /**
   * Determine whether the request should be handled by this handler
   * @param {HandlerInput} handlerInput
   * @return {boolean}
   */
  canHandle(handlerInput) {},

  /**
   * Handle the request and build the response object
   * @param {HandlerInput} handlerInput
   * @return {object} Response object
   */
  handle(handlerInput) {},
};

/**
 * Handler for `AMAZON.HelpIntent` requests
 */
const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (
      request.type === 'IntentRequest' &&
      request.intent.name === 'AMAZON.HelpIntent'
    );
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(messages.help)
      .reprompt(messages.helpReprompt)
      .getResponse();
  },
};

/**
 * Handler for `AMAZON.CancelIntent` and `AMAZON.StopIntent` requests
 */
const ExitHandler = {
  canHandle({ requestEnvelope }) {
    const request = requestEnvelope;
    return (
      request.type === 'IntentRequest' &&
      (request.intent.name === 'AMAZON.CancelIntent' ||
        request.intent.name === 'AMAZON.StopIntent')
    );
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder.speak(messages.stop).getResponse();
  },
};

/**
 * Catchall error handler
 */
const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak(messages.error)
      .reprompt(messages.error)
      .getResponse();
  },
};

/**
 * Handler for `SessionEndedRequest` requests
 */
const SessionEndedRequestHandler = {
  canHandle({ requestEnvelope }) {
    const { request } = requestEnvelope;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(
      `Session ended with reason: ${
        handlerInput.requestEnvelope.request.reason
      }`
    );

    return handlerInput.responseBuilder.getResponse();
  },
};

/**
 * Main function for handling Alexa requests
 *
 * @param {object} event Alexa request object
 * @param {object} context Optional context
 *
 * @return {Promise<ASKResponse>|Function}
 */
exports.handler = async (event, context) => {
  if (!skill) {
    skill = Alexa.SkillBuilders.standard()
      .addRequestHandlers(
        /* Add handlers here */
        HelpHandler,
        ExitHandler,
        SessionEndedRequestHandler
      )
      .addErrorHandlers(ErrorHandler)
      .withSkillId(alexAppId)
      .create();
  }

  return skill.invoke(event, context);
};
