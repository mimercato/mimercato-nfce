
/**
 * MimercatoNfce
 * https://github.com/phelipealves/mimercato-nfce
 *
 * Copyright (c) 2017 Phelipe Alves.
 * Licensed under the MIT license.
 */

var parse5 = require('parse5');
var xmlser = require('xmlserializer');
var xpath = require('xpath');
var dom = require('xmldom').DOMParser;
var cheerio = require('cheerio');

var nfceParser = require('./lib/nfce-parser');

module.exports = {
	nfceGO: function(key) {
		if (!key) {
			return '';
		}
		url = 'http://nfe.sefaz.go.gov.br/nfeweb/jsp/CConsultaCompletaNFEJSF.jsf?parametroChaveAcesso='+key;
		return new Promise((resolve, reject) => {
			nfceParser.getNfce(url, nfceParser.nfceQuerySelector('GO')).then(nfce => {
				resolve(nfce);
			});
		});
	}
}

// getDomContent(url).then(doc => {
// 	// var select = xpath.useNamespaces({"x": "http://www.w3.org/1999/xhtml"});
// 	// console.log("*****************");
// 	// var access_key = select('//*[@id="form"]/div/div[2]/table/tbody/tr[9]/td/table/table/tbody/tr/td[2]/span[2]', doc);
// 	// console.log(access_key);
// 	// console.log("*****************");
// 	// var result = xpath.evaluate(
// 	// 	'//*[@id="form"]/div/div[2]/table/tbody/tr[9]/td/table/table/tbody/tr/td[2]/span[2]',            // xpathExpression
// 	// 	doc,                        // contextNode
// 	// 	null,                       // namespaceResolver
// 	// 	xpath.XPathResult.ANY_TYPE, // resultType
// 	// 	null                        // result
// 	// )
// 	// console.log(result);
// 	// NFCe
// 	// console.log("*****************");
// 	// var model = select('//*[@id="form:Identificacao"]/div/table[4]/tbody/tr/td[2]/span[2]', doc);
// 	// console.log(model);
// 	// // var serie = select('string(//*[@id="form:Identificacao"]/div/table[2]/tbody/tr/td[2]/span[2])', doc).toString();
// 	// // console.log(serie);
// 	// console.log("*****************");
// 	// var access_key = select('//*[@id="form:Cabecalho"]/table/tbody/tr/td[1]/span/span[2]', doc);
// 	// console.log(access_key);

// 	// self.number = None
// 	// self.emission_date = None
// 	// self.value_total = None

// 	// self.emitente = Emitente()
// 	// self.products = []
// 	// Emitente

// 	// Product
// 	resolve("GO");
// });