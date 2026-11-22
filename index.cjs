const Application = require('@waline/vercel');

module.exports = Application({
  plugins: [],
  secureDomains: [
    'tawnyflor.neocities.org',
    // Waline may receive legitimate browser requests without Referer or Origin.
    // Allow only the empty-header case in addition to the blog hostname.
    '/^$/',
    'waline-comment-floralchai.vercel.app',
    'waline-comment-navy.vercel.app',
  ],
  async postSave(comment) {
    // do what ever you want after comment saved
  },
});
