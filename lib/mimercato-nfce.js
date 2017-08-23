const phantom = require('phantom');

const selector = require('./util/page-selector');
const nfceGO = require('./nfce/nfce-go');
// const nfceQueryDF = require('./query/query-df');

module.exports = {
    nfceQuery: function (state) {
        switch(state) {
            case "GO":
                return nfceGO;
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

                    if (logging) console.log("******* Query NFe *******");
                    nfce.nfe = await nfceQuery.nfe(page);
    
                    if (logging) console.log("******* Query Emitente *******");
                    nfce.emitente = await nfceQuery.emitente(page);
    
                    if (logging) console.log("******* Query Impostos *******");
                    nfce.impostos = await nfceQuery.impostos(page);
    
                    if (logging) console.log("******* Query Transporte *******");
                    nfce.transporte = await nfceQuery.transporte(page);
    
                    if (logging) console.log("******* Query Inf Adicionais *******");
                    nfce.info = await nfceQuery.info(page);
    
                    if (logging) console.log("******* Query Produtos *******");
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