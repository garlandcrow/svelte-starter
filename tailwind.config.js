// merge my config w/ smelte tailwind config, just like they do in their rollup plugin
const myConfig = require("./tailwind.custom");

module.exports = require("smelte/tailwind.config")(myConfig);
