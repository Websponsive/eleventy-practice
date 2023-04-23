const moment = require('moment-timezone')

module.exports = function (eleventyConfig) {
   
    eleventyConfig.addPassthroughCopy('/css');
    
    eleventyConfig.addFilter("formatDate", date => {
        return moment(date).tz('GMT').format('DD.MM.YYYY')
    })

    return {
        dir: {
            input: "src"
        },
    
        templateFormats: ["njk", "md", "html"]
    }
}; 