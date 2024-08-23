const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItFootnote = require('markdown-it-footnote');
const markdownItSup = require('markdown-it-sup');
const markdownItSub = require('markdown-it-sub');
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const anchor = require("markdown-it-anchor");

const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
}

module.exports = function (eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
        files: './public/static/**/*.css',
    });

    const markdownLib = markdownIt(markdownItOptions)
        .use(markdownItAttrs)
        .use(markdownItFootnote)
        .use(markdownItSup)
        .use(markdownItSub)
        .use(anchor)
    eleventyConfig.setLibrary('md', markdownLib);

    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/css");

    return {
        pathPrefix: "/website",
        dir: {
            input: 'src',
            includes: "_includes",
            layouts: "_layouts",
            data: "_data",
            output: "_site",
        },
    };
};