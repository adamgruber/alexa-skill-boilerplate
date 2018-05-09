/**
 * Catchall Error Handler
 */
module.exports = {
  canHandle() {
    return true;
  },

  handle({ responseBuilder }, error) {
    console.log(`Error handled: ${error.message}`);

    return responseBuilder.speak('Sorry, an error occurred.').getResponse();
  },
};
