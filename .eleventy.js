const moment = require('moment-timezone')

module.exports = function (eleventyConfig) {
   
    eleventyConfig.addPassthroughCopy('style.css');
    eleventyConfig.addPassthroughCopy('blog.css');
    
    eleventyConfig.addFilter("formatDate", date => {
        return moment(date).tz('GMT').format('DD.MM.YYYY')
    })

    return {
        dir: {
            input: "src"
        },
        passthroughFileCopy: true,
        templateFormats: ["njk", "md", "html"]
    }
}; 