module.exports = {
  /**
   * Strip out SSML tags from a given string.
   * @param {string} str Input string
   * @return {string}
   */
  stripTags(str) {
    return str.replace(/<\/?[^>]+(>|$)/g, '');
  },
};
