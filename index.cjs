const Application = require('@waline/vercel');

module.exports = Application({
  plugins: [],
  secureDomains: [
    'tawnyflor.neocities.org',
    'waline-comment-floralchai.vercel.app',
    'waline-comment-navy.vercel.app',
  ],
  async postSave(comment) {
    // do what ever you want after comment saved
  },
});
