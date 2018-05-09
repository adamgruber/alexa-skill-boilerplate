/**
 * Handler for `AMAZON.CancelIntent` and `AMAZON.StopIntent` requests
 */
module.exports = {
  canHandle({ requestEnvelope }) {
    const {
      request: { type, intent },
    } = requestEnvelope;
    return (
      type === 'IntentRequest' &&
      (intent.name === 'AMAZON.CancelIntent' ||
        intent.name === 'AMAZON.StopIntent')
    );
  },

  handle({ responseBuilder }) {
    const output = 'Goodbye!';
    return responseBuilder.speak(output).getResponse();
  },
};
