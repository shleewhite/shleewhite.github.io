const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("docs-src/docs.css");
  eleventyConfig.addPassthroughCopy("docs-src/retrology/*");
  eleventyConfig.addPassthroughCopy("docs-src/icons/svg/*");
  eleventyConfig.addPassthroughCopy("CNAME");
  return {
    dir: {
      input: "docs-src",
      output: "docs"
    },
    templateExtensionAliases: {
      "11ty.cjs": "11ty.js"
    }
  };
};