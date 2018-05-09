/**
 * Handler for `SessionEndedRequest` requests
 */
module.exports = {
  canHandle({ requestEnvelope }) {
    const { request } = requestEnvelope;
    return request.type === 'SessionEndedRequest';
  },

  handle({ requestEnvelope, responseBuilder }) {
    console.log(`Session ended with reason: ${requestEnvelope.request.reason}`);

    return responseBuilder.getResponse();
  },
};
