
/**
 * MimercatoNfce
 * https://github.com/phelipealves/mimercato-nfce
 *
 * Copyright (c) 2017 Phelipe Alves.
 * Licensed under the MIT license.
 */

var nfceParser = require('./lib/mimercato-nfce');

module.exports = {
	nfceGO: function(key, logging=false) {
		if (!key) {
			return '';
		}
		url = 'http://nfe.sefaz.go.gov.br/nfeweb/jsp/CConsultaCompletaNFEJSF.jsf?parametroChaveAcesso='+key;
		return new Promise((resolve, reject) => {
			nfceParser.getNfce(url, nfceParser.nfceQuery('GO'), logging).then(nfce => {
				resolve(nfce);
			});
		});
	},
	nfceDF: function(key, logging=false) {
		if (!key) {
			return '';
		}
		url = 'http://dec.fazenda.df.gov.br/ConsultarNFCe.aspx?chNFe='+key;
		return new Promise((resolve, reject) => {
			nfceParser.getNfce(url, nfceParser.nfceQuery('DF'), logging).then(nfce => {
				resolve(nfce);
			});
		});
	},
	nfceRS: function(key, logging=false) {
		if (!key) {
			return '';
		}
		url = 'https://www.sefaz.rs.gov.br/ASP/AAE_ROOT/NFE/SAT-WEB-NFE-COM_1.asp?HML=&chaveNFe='+key;
		return new Promise((resolve, reject) => {
			nfceParser.getNfce(url, nfceParser.nfceQuery('RS'), logging).then(nfce => {
				resolve(nfce);
			});
		});
	}
	
}