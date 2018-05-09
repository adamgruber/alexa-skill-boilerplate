/**
 * Handler for `AMAZON.FallbackIntent` requests
 */
module.exports = {
  canHandle({ requestEnvelope }) {
    const {
      request: { type, intent },
    } = requestEnvelope;
    return type === 'IntentRequest' && intent.name === 'AMAZON.FallbackIntent';
  },

  handle({ responseBuilder }) {
    const output = "I'm sorry, I can't help with that.";
    return responseBuilder
      .speak(output)
      .reprompt(output)
      .getResponse();
  },
};
