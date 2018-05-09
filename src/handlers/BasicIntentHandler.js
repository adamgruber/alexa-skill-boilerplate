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
module.exports = {
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
