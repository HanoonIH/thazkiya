module.exports = {

    /**
 * Filters out the passed item from the passed collection
 * and randomises and limits them based on flags
 *
 * @param {Array} collection The 11ty collection we want to take from
 * @param {Object} item The item we want to exclude (often current page)
 * @param {Number} limit=3 How many items we want back
 * @param {Boolean} random=true Wether or not this should be randomised
 * @returns {Array} The resulting collection
 */
    getSiblingContent(collection, item, limit = 3, random = true) {
        let filteredItems = collection.filter(x => x.url !== item.url);

        // only to randomize swap recommended posts
        if (random) {
            let counter = filteredItems.length;

            while (counter > 0) {
                // Pick a random index
                let index = Math.floor(Math.random() * counter);

                counter--;

                let temp = filteredItems[counter];

                // Swap the last element with the random one
                filteredItems[counter] = filteredItems[index];
                filteredItems[index] = temp;
            }
        }

        // Lastly, trim to length
        if (limit > 0) {
            filteredItems = filteredItems.slice(0, limit);
        }

        return filteredItems;
    },

    // remove first item of obj and return
    deleteFirstItem(obj) {
        let newObj = { ...obj };
        delete newObj.all;
        // newObj = obj; 
        return newObj;
    }

}