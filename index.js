const Alexa = require('ask-sdk');
const {
  CancelStopHandler,
  ErrorHandler,
  FallbackHandler,
  HelpHandler,
  SessionEndedHandler,
} = require('./src/handlers');

/* Replace with skill id from Alexa developer console */
const alexAppId = 'amzn1.ask.skill.unique-skill-id';

let skill;

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
        /* Add custom handlers above these */
        CancelStopHandler,
        FallbackHandler,
        HelpHandler,
        SessionEndedHandler
      )
      .addErrorHandlers(ErrorHandler)
      .withSkillId(alexAppId)
      .create();
  }

  return skill.invoke(event, context);
};
