/**
 * Handler for `AMAZON.HelpIntent` requests
 */
module.exports = {
  canHandle({ requestEnvelope }) {
    const {
      request: { type, intent },
    } = requestEnvelope;
    return type === 'IntentRequest' && intent.name === 'AMAZON.HelpIntent';
  },

  handle({ responseBuilder }) {
    const output = 'What can I help you with?';
    return responseBuilder
      .speak(output)
      .reprompt(output)
      .getResponse();
  },
};
