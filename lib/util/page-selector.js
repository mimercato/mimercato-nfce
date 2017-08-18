
exports.queryInnerText = async function(page, selector_text) {
    return await page.evaluate(function(s) {
        return document.querySelector(s).innerText;
    }, selector_text);
};

exports.querySelector = async function(page, selector_text) {
    return await page.evaluate(function(s) {
        return document.body.querySelector(s);
    }, selector_text);
};

exports.querySelectorAll = async function(page, selector_text) {
    return await page.evaluate(function(s) {
        var data = document.querySelectorAll(s);
        return data;
    }, selector_text);
};