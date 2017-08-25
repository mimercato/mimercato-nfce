
exports.getContent = function(url, page) {
    return new Promise((resolve, reject) => {
        (async function() {
            const status = await page.open(url);
            if (status === 'success') {
                setTimeout(async function (page) {
                    const content = await page.property('content');
                    resolve(page);                    
                }.bind(this, page), 20000);
            } else {
                reject("Error to load the page: " + url);
            }   
        }());
    })
}