const Application = require('@waline/vercel');

module.exports = Application({
  plugins: [],
  // This is a public comment API. Do not restrict readers by Referer:
  // browsers, privacy tools, and embedded clients may omit or change it.
  // CORS is handled separately by vercel.json for the public API routes.
  async postSave(comment) {
    // do what ever you want after comment saved
  },
});
