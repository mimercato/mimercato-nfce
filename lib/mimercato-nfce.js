const phantom = require('phantom');

const selector = require('./util/page-selector');
const nfceGO = require('./nfce/nfce-go');
const nfceDF = require('./nfce/nfce-df');
const nfceRS = require('./nfce/nfce-rs');

module.exports = {
    nfceQuery: function (state) {
        switch(state) {
            case "GO":
                return nfceGO;
            case "DF":
                return nfceDF;
            case "RS":
                return nfceRS;
            default:
                return "Select a valid state of Brazil.";
        }
    },
    getNfce: function(url, nfceQuery, logging=false) {
        return new Promise((resolve, reject) => {
            (async function() {
                const instance = await phantom.create();
                const page = await instance.createPage();
                page.property('customHeaders', {
                    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36"
                });
                if (logging) {
                    page.on("onResourceRequested", function(requestData, networkRequest) {
                        console.info('Requesting', requestData.url);
                    });			
                    page.on("onUrlChanged", function(targetUrl) {
                        console.log('New URL: ' + targetUrl);
                    });
                    page.on("onLoadFinished", function(status) {
                        console.log('Load Finished: ' + status);
                    });
                    page.on("onLoadStarted", function() {
                        console.log('Load Started');
                    });
                    page.on("onNavigationRequested", function(url, type, willNavigate, main) {
                        console.log('Trying to navigate to: ' + url);
                    });
                    page.property('onConsoleMessage', function(msg) {
                        console.info(msg);
                    });
                }
                nfceQuery.content(url, page).then(async function(page){
                    var nfce = {};

                    if (logging) console.log("******* Query Geral *******");
                    nfce = await nfceQuery.geral(page);

                    if (logging) console.log("******* Query NFe *******");
                    nfce.nfe = await nfceQuery.nfe(page);
    
                    if (logging) console.log("******* Query Emitente *******");
                    nfce.emitente = await nfceQuery.emitente(page);

                    if (logging) console.log("******* Query Destinatario *******");
                    nfce.destinatario = await nfceQuery.destinatario(page);

                    if (logging) console.log("******* Query Produtos *******");
                    nfce.produtos = await nfceQuery.produtos(page);
                    if (logging) console.log(nfce.produtos.length + ' product(s) found');
    
                    if (logging) console.log("******* Query Impostos *******");
                    nfce.impostos = await nfceQuery.impostos(page);
    
                    if (logging) console.log("******* Query Transporte *******");
                    nfce.transporte = await nfceQuery.transporte(page);

                    if (logging) console.log("******* Query Cobranca *******");
                    nfce.cobranca = await nfceQuery.cobranca(page);
    
                    if (logging) console.log("******* Query Inf Adicionais *******");
                    nfce.info = await nfceQuery.info(page);
                    
                    instance.exit();
                    resolve(nfce);
                }).catch(function(){
                    instance.exit(1);
                    reject('Error fetching page content.');
                });
            }());
        });
    }
}