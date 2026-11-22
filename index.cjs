const Application = require('@waline/vercel');

const walineHandler = Application({
  plugins: [],
  secureDomains: [
    'tawnyflor.neocities.org',
    '/^https?:\\/\\/tawnyflor\\.neocities\\.org(?::\\d+)?(?:\\/.*)?$/',
    '/^waline-comment-[a-z0-9]+-floralchai\\.vercel\\.app$/',
    'waline-comment-floralchai.vercel.app',
    'waline-comment-navy.vercel.app',
    '/^$/',
  ],
  async postSave(comment) {
    // do what ever you want after comment saved
  },
});

// Temporary, privacy-safe diagnostics: log hostnames only, never full URLs,
// query strings, comment content, cookies, authorization headers, or secrets.
function hostname(value) {
  if (!value) return '';
  try {
    return new URL(value).hostname;
  } catch {
    return '';
  }
}

module.exports = (req, res) => {
  const referer = req.headers.referer || req.headers.referrer || '';
  console.log('[Waline referrer check]', JSON.stringify({
    requestHost: req.headers.host || '',
    originHost: hostname(req.headers.origin),
    refererHost: hostname(referer),
    hasOrigin: Boolean(req.headers.origin),
    hasReferer: Boolean(referer),
  }));
  return walineHandler(req, res);
};
