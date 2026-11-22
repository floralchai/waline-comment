const Application = require('@waline/vercel');

module.exports = Application({
  plugins: [],
  secureDomains: [
    'tawnyflor.neocities.org',
    // Accept the blog's full referrer URL as well as its hostname.
    '/^https?:\\/\\/tawnyflor\\.neocities\\.org(?::\\d+)?(?:\\/.*)?$/',
    // Waline's own Vercel deployment URLs are also valid referrers.
    '/^waline-comment-[a-z0-9]+-floralchai\\.vercel\\.app$/',
    'waline-comment-floralchai.vercel.app',
    'waline-comment-navy.vercel.app',
    // Some privacy settings omit both Referer and Origin.
    '/^$/',
  ],
  async postSave(comment) {
    // do what ever you want after comment saved
  },
});
