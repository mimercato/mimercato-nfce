
/**
 * MimercatoNfce
 * https://github.com/phelipealves/mimercato-nfce
 *
 * Copyright (c) 2017 Phelipe Alves.
 * Licensed under the MIT license.
 */

var request = require('request');
var cheerio = require('cheerio');

module.exports = {
	nfceGO: function(key) {
		if (!key) {
			return '';
		}

		url = 'http://nfe.sefaz.go.gov.br/nfeweb/jsp/CConsultaCompletaNFEJSF.jsf?parametroChaveAcesso='+key;
		console.log(url);
		return new Promise((resolve, reject) => {
			request(url, function(error, response, html){
				if (!error){
					var $ = cheerio.load(html);
					console.log($.html());
					$('#form').filter(function(){
		                var data = $(this);
		                title = data.text();
		                console.log(title);
						resolve("GO");
		            });
				}
			});	
		});			
	}
}
