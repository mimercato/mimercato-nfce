
exports.getContent = function(url, page) {
    return new Promise((resolve, reject) => {
        (async function() {
            const status = await page.open(url);
            if (status === 'success') {
                await page.evaluate(function(){
					document.getElementsByName('Action')[0].click()
				});
                setTimeout(async function (page) {
                    resolve(page);                    
                }.bind(this, page), 20000);
            } else {
                reject("Error to load the page: " + url);
            }   
        }());
    })
}