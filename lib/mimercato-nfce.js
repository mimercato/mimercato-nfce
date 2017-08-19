const phantom = require('phantom');

const selector = require('./util/page-selector');
const nfceQueryGO = require('./query/query-go');
// const nfceQueryDF = require('./query/query-df');

module.exports = {
    nfceQuery: function (state) {
        switch(state) {
            case "GO":
                return nfceQueryGO;
            // case "DF":
            //     return nfceQueryDF;
            default:
                return "Select a valid state of Brazil.";
        }
    },
    getNfce: function(url, nfceQuery, logging=false) {
        return new Promise((resolve, reject) => {
            (async function() {
                const instance = await phantom.create();
                const page = await instance.createPage();
                // enable log of requests and the to messages received in querySelector
                if (logging) {
                    await page.on("onResourceRequested", function(requestData) {
                        console.info('Requesting', requestData.url)
                    });
                    page.property('onConsoleMessage', function(msg) {
                        console.info(msg);
                    });
                }
                const status = await page.open(url);
                if (status === 'success') {
                    // get content of page
                    const content = await page.property('content');
                    // NFC-e
                    var nfce = {};

                    console.log("***********************");
                    console.log("Query NFe");
                    console.log("***********************");
                    nfce.nfe = await nfceQuery.nfe(page);
    
                    console.log("***********************");
                    console.log("Query Emitente");
                    console.log("***********************");
                    nfce.emitente = await nfceQuery.emitente(page);
    
                    console.log("***********************");
                    console.log("Query Impostos");
                    console.log("***********************");
                    nfce.impostos = await nfceQuery.impostos(page);
    
                    console.log("***********************");
                    console.log("Query Transporte");
                    console.log("***********************");
                    nfce.transporte = await nfceQuery.transporte(page);
    
                    console.log("***********************");
                    console.log("Query Inf Adicionais");
                    console.log("***********************");
                    nfce.info = await nfceQuery.info(page);
    
                    console.log("***********************");
                    console.log("Query PRODUCTS");
                    console.log("***********************");
                    nfce.produtos = await nfceQuery.produtos(page)
                    
                    instance.exit();
                    resolve(nfce);
                } else {
                    instance.exit(1);
                    reject("Error to open url: " +  page.reason_url);
                }   
            }());
        });
    }
}