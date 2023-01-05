module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: "src",
            output: "build",
        },
        templateFormats : ["njk", "md", "html"]
    };
}
