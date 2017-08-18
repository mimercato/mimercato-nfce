
/**
 * MimercatoNfce
 * https://github.com/phelipealves/mimercato-nfce
 *
 * Copyright (c) 2017 Phelipe Alves.
 * Licensed under the MIT license.
 */

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