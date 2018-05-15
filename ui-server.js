// Create a Browsersync instance
var bs = require("browser-sync").create();


// Now init the Browsersync server
bs.init({
    server: "./",
    index: './index.html',
    files: ['*.html','css/*.css', 'js/*.js']
});