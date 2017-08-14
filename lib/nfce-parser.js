const phantom = require('phantom');

nfceGO = require('./nfce-parser-go');
nfceDF = require('./nfce-parser-df');
// nfceMS = require('nfce-parser-ms.js');

async function querySelectorInnerText(page, selector_text) {
    var value = await page.evaluate(function(s) {
        return document.querySelector(s).innerText;
    }, selector_text);
    return value;
}

module.exports = {
    nfceQuerySelector: function (state) {
        switch(state) {
            case "GO":
                return nfceGO.nfceQuerySelector();
            case "DF":
                return nfceDF.nfceQuerySelector();
            // case "MS":
            //     return nfceMS.nfceQuerySelector();
            default:
                return "Select a valid state of Brazil.";
        }
    },
    getNfce: function(url, querySelector) {
        return new Promise((resolve, reject) => {
            (async function() {
                const instance = await phantom.create();
                const page = await instance.createPage();
                // await page.on("onResourceRequested", function(requestData) {
                //     console.info('Requesting', requestData.url)
                // });
                
                const status = await page.open(url);
                // console.log(status);
                const content = await page.property('content');
                // console.log(content);
                var nfce = {
                    "nfce": {
                        "modelo": await querySelectorInnerText(page, querySelector.nfce.modelo),
                        "serie": await querySelectorInnerText(page, querySelector.nfce.serie),
                        "numero": await querySelectorInnerText(page, querySelector.nfce.numero),
                        "dataEmissao": await querySelectorInnerText(page, querySelector.nfce.dataEmissao),
                        "dataEntrada": await querySelectorInnerText(page, querySelector.nfce.dataEntrada), // Not completed
                        "valor": await querySelectorInnerText(page, querySelector.nfce.valor),
                        "cnpj": await querySelectorInnerText(page, querySelector.nfce.cnpj),
                        "nome": await querySelectorInnerText(page, querySelector.nfce.nome),
                        "inscricaoEstadual": await querySelectorInnerText(page, querySelector.nfce.inscricaoEstadual),
                        "uf": await querySelectorInnerText(page, querySelector.nfce.uf),
                        "processo": await querySelectorInnerText(page, querySelector.nfce.processo),
                        "processoVer": await querySelectorInnerText(page, querySelector.nfce.processoVer),
                        "tipoEmissao": await querySelectorInnerText(page, querySelector.nfce.tipoEmissao),
                        "finalidade": await querySelectorInnerText(page, querySelector.nfce.finalidade),
                        "natureza": await querySelectorInnerText(page, querySelector.nfce.natureza),
                        "tipoOperacao": await querySelectorInnerText(page, querySelector.nfce.tipoOperacao),
                        "formaPagamento": await querySelectorInnerText(page, querySelector.nfce.formaPagamento),
                        "digest": await querySelectorInnerText(page, querySelector.nfce.digest),
                        "eventos": await querySelectorInnerText(page, querySelector.nfce.eventos),
                        "protocolo": await querySelectorInnerText(page, querySelector.nfce.protocolo),
                        "dataAutorizacao": await querySelectorInnerText(page, querySelector.nfce.dataAutorizacao),
                        "dataInclusao": await querySelectorInnerText(page, querySelector.nfce.dataInclusao) // Not completed
                    }
                };
                // console.log(nfce);
                // console.log("*****************");
                // console.log("PRODUCTS");
                // var products = await page.evaluate(function(s) {
                //     console.log(document.querySelector(s));
                //     return (document.querySelector(s));
                // }, '#form > div > div.rich-panel-body > table > tbody > tr:nth-child(10) > td > table > tbody > tr:nth-child(2) > td:nth-child(1) > div > table:nth-child(11) > tbody > tr > td:nth-child(3) > span.linha > div');
                // console.log(products);
                // console.log("*****************");
                
                // console.log("*****************");
                // console.log("PRODUCTS");
                // $ = cheerio.load(content);
                // var sel = 'body>form>div>div.rich-panel-body>table>tbody>tr:nth-child(10)>td>table>tbody>tr:nth-child(2)>td:nth-child(4)>table:nth-child(3)>tbody>tr>td:nth-child(3)>span';
                // console.log($(sel));
                // console.log($(sel).html());
                // var products = $(sel);
                // var products = $('#form > div > div.rich-panel-body > table > tbody > tr:nth-child(10) > td > table > tbody > tr:nth-child(2) > td:nth-child(1) > div > table:nth-child(2) > tbody > tr > td:nth-child(1) > span.linha');
                
                // console.log($('#form > div > div.rich-panel-body > table > tbody > tr:nth-child(10) > td > table > tbody > tr:nth-child(2) > td:nth-child(1) > div > table:nth-child(2) > tbody > tr > td:nth-child(1) > span.linha'));
                // products.each(function(i, result) {
                // 	console.log(">>> PRODUCT");
                // 	console.log(i);
                // 	console.log(result);
                // });
                instance.exit();
                resolve(nfce);
            }());
        });
    }
}