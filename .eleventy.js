const { DateTime } = require('luxon');

module.exports = config => {

    // Passthrough
    config.addPassthroughCopy('./src/assets/');
    config.addPassthroughCopy('./src/style.css');
    config.addPassthroughCopy('./src/admin');

    // Filters
    config.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    // Returns a collection of blog posts in reverse date order
    config.addCollection('post', collection => {
        return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}