module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: "src",
            output: "docs",
        },
        templateFormats : ["njk", "md", "html"]
    };
}
