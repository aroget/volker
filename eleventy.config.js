const { EleventyI18nPlugin } = require('@11ty/eleventy');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets/');

  eleventyConfig.addWatchTarget('./src/css/');
  eleventyConfig.addPassthroughCopy('./src/css/');

  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: 'de',
  });

  eleventyConfig.addFilter('filterByLanguage', function (pages, language) {
    return pages.filter((page) => page.data.lang === language);
  });

  return {
    dir: {
      input: 'src',
      output: 'public',
    },

    // pathPrefix: '/',
  };
};
