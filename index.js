
/**
 * MimercatoNfce
 * https://github.com/phelipealves/mimercato-nfce
 *
 * Copyright (c) 2017 Phelipe Alves.
 * Licensed under the MIT license.
 */

var request = require('request');
var cheerio = require('cheerio');
var parse5 = require('parse5');
var xmlser = require('xmlserializer');
var xpath = require('xpath')
  , dom = require('xmldom').DOMParser;

var osmosis = require('osmosis');

module.exports = {
	nfceGO: function(key) {
		if (!key) {
			return '';
		}

		url = 'http://nfe.sefaz.go.gov.br/nfeweb/jsp/CConsultaCompletaNFEJSF.jsf?parametroChaveAcesso='+key;
		console.log(url);
		return new Promise((resolve, reject) => {
			// request(url, function(error, response, html){
			// 	if (!error){
			// 		var $ = cheerio.load(html);
			// 		console.log($.html());

			// 		var document = parse5.parse($.html());
			// 	    var xhtml = xmlser.serializeToString(document);
			// 	    var doc = new dom().parseFromString(xhtml);
			// 	    var select = xpath.useNamespaces({"x": "http://www.w3.org/1999/xhtml"});
			// 	    var cnpj = select('//*[@id="cnpjEmitente"]', doc);
			// 	    console.log(cnpj);

			// 		// $('#form').filter(function(){
		 //   //              var data = $(this);
		 //   //              title = data.text();
		 //   //              console.log(title);
		 //   //          });
			// 		resolve("GO");
			// 	}
			// });	

			osmosis
			.get('www.craigslist.org/about/sites')
			.find('h1 + div a')
			.set('location')
			.follow('@href')
			.find('header + div + div li > a')
			.set('category')
			.follow('@href')
			.paginate('.totallink + a.button.next:first')
			.find('p > a')
			.follow('@href')
			.set({
			    'title':        'section > h2',
			    'description':  '#postingbody',
			    'subcategory':  'div.breadbox > span[4]',
			    'date':         'time@datetime',
			    'latitude':     '#map@data-latitude',
			    'longitude':    '#map@data-longitude',
			    'images':       ['img@src']
			})
			.data(function(listing) {
			    // do something with listing data
			    console.log(listing);
			    resolve("GO");
			})
			.log(console.log)
			.error(console.log)
			.debug(console.log)

			
		});			
	}
}
