// imports
var chai = require('chai')
var expect = chai.expect

// ------
var nfceRS = require('../index').nfceRS;

// data
var rs_data = require('./data/expected-rs-data')

describe('#NFCe-RS', function() {
	var nfceObj;
	var expect_data;
	
	before(function(done){
		expect_data = rs_data

		nfceRS('43151293015006000890651050000132661681112959', true).then(nfce => {
			nfceObj = nfce;	
			console.log(nfce);
			done();
		});		
	});

	describe('NFCe-geral', function() {
		it('chaveNFe', function(done) {
			expect(nfceObj.chaveNFe).to.equal(expect_data.geral.chaveNFe);
			done();
		});
		it('numero', function(done) {
			expect(nfceObj.numero).to.equal(expect_data.geral.numero);
			done();
		});
		it('versaoXML', function(done) {
			expect(nfceObj.versaoXML).to.equal(expect_data.geral.versaoXML);
			done();
		});
	});

	describe('NFCe-nfe', function() {
		it('modelo', function(done) {
			expect(nfceObj.nfe.modelo).to.equal(expect_data.nfe.modelo);
			done();
		});
		it('serie', function(done) {
			expect(nfceObj.nfe.serie).to.equal(expect_data.nfe.serie);
			done();
		});
		it('numero', function(done) {
			expect(nfceObj.nfe.numero).to.equal(expect_data.nfe.numero);
			done();
		});
		it('dataEmissao', function(done) {
			expect(nfceObj.nfe.dataEmissao).to.equal(expect_data.nfe.dataEmissao);
			done();
		});
		it('valor', function(done) {
			expect(nfceObj.nfe.valor).to.equal(expect_data.nfe.valor);
			done();
		});
		it('cnpj', function(done) {
			expect(nfceObj.nfe.cnpj).to.equal(expect_data.nfe.cnpj);
			done();
		});
		it('nome', function(done) {
			expect(nfceObj.nfe.nome).to.equal(expect_data.nfe.nome);
			done();
		});
		it('inscricaoEstadual', function(done) {
			expect(nfceObj.nfe.inscricaoEstadual).to.equal(expect_data.nfe.inscricaoEstadual);
			done();
		});
		it('uf', function(done) {
			expect(nfceObj.nfe.uf).to.equal(expect_data.nfe.uf);
			done();
		});
		it('processo', function(done) {
			expect(nfceObj.nfe.processo).to.equal(expect_data.nfe.processo);
			done();
		});
		it('processoVer', function(done) {
			expect(nfceObj.nfe.processoVer).to.equal(expect_data.nfe.processoVer);
			done();
		});
		it('tipoEmissao', function(done) {
			expect(nfceObj.nfe.tipoEmissao).to.equal(expect_data.nfe.tipoEmissao);
			done();
		});
		it('finalidade', function(done) {
			expect(nfceObj.nfe.finalidade).to.equal(expect_data.nfe.finalidade);
			done();
		});
		it('natureza', function(done) {
			expect(nfceObj.nfe.natureza).to.equal(expect_data.nfe.natureza);
			done();
		});
		it('tipoOperacao', function(done) {
			expect(nfceObj.nfe.tipoOperacao).to.equal(expect_data.nfe.tipoOperacao);
			done();
		});
		it('formaPagamento', function(done) {
			expect(nfceObj.nfe.formaPagamento).to.equal(expect_data.nfe.formaPagamento);
			done();
		});
		it('digest', function(done) {
			expect(nfceObj.nfe.digest).to.equal(expect_data.nfe.digest);
			done();
		});
		it('eventos', function(done) {
			expect(nfceObj.nfe.eventos).to.equal(expect_data.nfe.eventos);
			done();
		});
		it('protocolo', function(done) {
			expect(nfceObj.nfe.protocolo).to.equal(expect_data.nfe.protocolo);
			done();
		});
		it('dataAutorizacao', function(done) {
			expect(nfceObj.nfe.dataAutorizacao).to.equal(expect_data.nfe.dataAutorizacao);
			done();
		});
	});

	describe('NFCe-emitente', function() {
		it('nome', function(done) {
			expect(nfceObj.emitente.nome).to.equal(expect_data.emitente.nome);
			done();
		});
		it('nomeFantasia', function(done) {
			expect(nfceObj.emitente.nomeFantasia).to.equal(expect_data.emitente.nomeFantasia);
			done();
		});
		it('cnpj', function(done) {
			expect(nfceObj.emitente.cnpj).to.equal(expect_data.emitente.cnpj);
			done();
		});
		it('endereco', function(done) {
			expect(nfceObj.emitente.endereco).to.equal(expect_data.emitente.endereco);
			done();
		});
		it('bairro', function(done) {
			expect(nfceObj.emitente.bairro).to.equal(expect_data.emitente.bairro);
			done();
		});
		it('cep', function(done) {
			expect(nfceObj.emitente.cep).to.equal(expect_data.emitente.cep);
			done();
		});
		it('cidade', function(done) {
			expect(nfceObj.emitente.cidade).to.equal(expect_data.emitente.cidade);
			done();
		});
		it('telefone', function(done) {
			expect(nfceObj.emitente.telefone).to.equal(expect_data.emitente.telefone);
			done();
		});
		it('uf', function(done) {
			expect(nfceObj.emitente.uf).to.equal(expect_data.emitente.uf);
			done();
		});
		it('pais', function(done) {
			expect(nfceObj.emitente.pais).to.equal(expect_data.emitente.pais);
			done();
		});
		it('inscricaoEstadual', function(done) {
			expect(nfceObj.emitente.inscricaoEstadual).to.equal(expect_data.emitente.inscricaoEstadual);
			done();
		});
		it('inscricaoEstadualSubs', function(done) {
			expect(nfceObj.emitente.inscricaoEstadualSubs).to.equal(expect_data.emitente.inscricaoEstadualSubs);
			done();
		});
		it('inscricaoMunicipal', function(done) {
			expect(nfceObj.emitente.inscricaoMunicipal).to.equal(expect_data.emitente.inscricaoMunicipal);
			done();
		});
		it('municipioICMS', function(done) {
			expect(nfceObj.emitente.municipioICMS).to.equal(expect_data.emitente.municipioICMS);
			done();
		});
		it('cnae', function(done) {
			expect(nfceObj.emitente.cnae).to.equal(expect_data.emitente.cnae);
			done();
		});
		it('codigoRegimeTributario', function(done) {
			expect(nfceObj.emitente.codigoRegimeTributario).to.equal(expect_data.emitente.codigoRegimeTributario);
			done();
		});
	});

	describe('NFCe-destinatario', function() {
		it('nome', function(done) {
			expect(nfceObj.destinatario.nome).to.equal(expect_data.destinatario.nome);
			done();
		});
		it('cnpj_cpf', function(done) {
			expect(nfceObj.destinatario.cnpj_cpf).to.equal(expect_data.destinatario.cnpj_cpf);
			done();
		});
		it('endereco', function(done) {
			expect(nfceObj.destinatario.endereco).to.equal(expect_data.destinatario.endereco);
			done();
		});
		it('bairro', function(done) {
			expect(nfceObj.destinatario.bairro).to.equal(expect_data.destinatario.bairro);
			done();
		});
		it('cep', function(done) {
			expect(nfceObj.destinatario.cep).to.equal(expect_data.destinatario.cep);
			done();
		});
		it('cidade', function(done) {
			expect(nfceObj.destinatario.cidade).to.equal(expect_data.destinatario.cidade);
			done();
		});
		it('telefone', function(done) {
			expect(nfceObj.destinatario.telefone).to.equal(expect_data.destinatario.telefone);
			done();
		});
		it('uf', function(done) {
			expect(nfceObj.destinatario.uf).to.equal(expect_data.destinatario.uf);
			done();
		});		
		it('pais', function(done) {
			expect(nfceObj.destinatario.pais).to.equal(expect_data.destinatario.pais);
			done();
		});
		it('indicadorIE', function(done) {
			expect(nfceObj.destinatario.indicadorIE).to.equal(expect_data.destinatario.indicadorIE);
			done();
		});
		it('inscricaoEstadual', function(done) {
			expect(nfceObj.destinatario.inscricaoEstadual).to.equal(expect_data.destinatario.inscricaoEstadual);
			done();
		});
		it('inscricaoSuframa', function(done) {
			expect(nfceObj.destinatario.inscricaoSuframa).to.equal(expect_data.destinatario.inscricaoSuframa);
			done();
		});
		it('im', function(done) {
			expect(nfceObj.destinatario.im).to.equal(expect_data.destinatario.im);
			done();
		});
		it('email', function(done) {
			expect(nfceObj.destinatario.email).to.equal(expect_data.destinatario.email);
			done();
		});
	});
	
	// describe('NFCe-produtos', function() {
	// 	it('Total of products expected', function(done) {
	// 		expect(nfceObj.produtos.length).to.equal(12);
	// 		done();	
	// 	});
	// 	it('aliquotaICMS', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].aliquotaICMS).to.equal(product.aliquotaICMS);				
	// 		});
	// 		done();
	// 	});
	// 	it('baseCalculoICMS', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].baseCalculoICMS).to.equal(product.baseCalculoICMS);				
	// 		});
	// 		done();
	// 	});
	// 	it('cfop', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].cfop).to.equal(product.cfop);
	// 		});
	// 		done();
	// 	});
	// 	it('codigo', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].codigo).to.equal(product.codigo);
	// 		});
	// 		done();
	// 	});
	// 	it('codigoEANComercial', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].codigoEANComercial).to.equal(product.codigoEANComercial);
	// 		});
	// 		done();
	// 	});
	// 	it('codigoEANTributavel', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].codigoEANTributavel).to.equal(product.codigoEANTributavel);
	// 		});
	// 		done();
	// 	});
	// 	it('codigoNCM', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].codigoNCM).to.equal(product.codigoNCM);
	// 		});
	// 		done();
	// 	});
	// 	it('confinsCST', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].confinsCST).to.equal(product.confinsCST);
	// 		});
	// 		done();
	// 	});
	// 	it('descricao', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].descricao).to.equal(product.descricao);
	// 		});
	// 		done();
	// 	});
	// 	it('indicadorComposicao', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].indicadorComposicao).to.equal(product.indicadorComposicao);
	// 		});
	// 		done();
	// 	});
	// 	it('modalidadeICMS', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].modalidadeICMS).to.equal(product.modalidadeICMS);
	// 		});
	// 		done();
	// 	});
	// 	it('origemMercadoria', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].origemMercadoria).to.equal(product.origemMercadoria);
	// 		});
	// 		done();
	// 	});
	// 	it('pisCST', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].pisCST).to.equal(product.pisCST);
	// 		});
	// 		done();
	// 	});
	// 	it('quantidade', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].quantidade).to.equal(product.quantidade);
	// 		});
	// 		done();
	// 	});
	// 	it('quantidadeComercial', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].quantidadeComercial).to.equal(product.quantidadeComercial);
	// 		});
	// 		done();
	// 	});
	// 	it('quantidadeTributavel', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].quantidadeTributavel).to.equal(product.quantidadeTributavel);
	// 		});
	// 		done();
	// 	});
	// 	it('tributacaoICMS', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].tributacaoICMS).to.equal(product.tributacaoICMS);
	// 		});
	// 		done();
	// 	});
	// 	it('unidade', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].unidade).to.equal(product.unidade);
	// 		});
	// 		done();
	// 	});
	// 	it('unidadeComercial', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].unidadeComercial).to.equal(product.unidadeComercial);
	// 		});
	// 		done();
	// 	});
	// 	it('unidadeTributavel', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].unidadeTributavel).to.equal(product.unidadeTributavel);
	// 		});
	// 		done();
	// 	});
	// 	it('valor', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].valor).to.equal(product.valor);
	// 		});
	// 		done();
	// 	});
	// 	it('valorAproxTributos', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].valorAproxTributos).to.equal(product.valorAproxTributos);
	// 		});
	// 		done();
	// 	});
	// 	it('valorICMS', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].valorICMS).to.equal(product.valorICMS);
	// 		});
	// 		done();
	// 	});
	// 	it('valorUnitarioComercial', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].valorUnitarioComercial).to.equal(product.valorUnitarioComercial);
	// 		});
	// 		done();
	// 	});
	// 	it('valorUnitarioTributavel', function(done) {
	// 		expect_data.produtos.forEach(function(product, i) {
	// 			expect(nfceObj.produtos[i].valorUnitarioTributavel).to.equal(product.valorUnitarioTributavel);
	// 		});
	// 		done();
	// 	});
	// });

	describe('NFCe-impostos', function() {
		it('baseICMS', function(done) {
			expect(nfceObj.impostos.baseICMS).to.equal(expect_data.impostos.baseICMS);
			done();
		});
		it('icmsValor', function(done) {
			expect(nfceObj.impostos.icmsValor).to.equal(expect_data.impostos.icmsValor);
			done();
		});
		it('icmsDesonerado', function(done) {
			expect(nfceObj.impostos.icmsDesonerado).to.equal(expect_data.impostos.icmsDesonerado);
			done();
		});
		it('icmsST', function(done) {
			expect(nfceObj.impostos.icmsST).to.equal(expect_data.impostos.icmsST);
			done();
		});
		it('icmsSubs', function(done) {
			expect(nfceObj.impostos.icmsSubs).to.equal(expect_data.impostos.icmsSubs);
			done();
		});
		it('totalProdutos', function(done) {
			expect(nfceObj.impostos.totalProdutos).to.equal(expect_data.impostos.totalProdutos);
			done();
		});
		it('totalFrete', function(done) {
			expect(nfceObj.impostos.totalFrete).to.equal(expect_data.impostos.totalFrete);
			done();
		});
		it('totalSeguro', function(done) {
			expect(nfceObj.impostos.totalSeguro).to.equal(expect_data.impostos.totalSeguro);
			done();
		});
		it('despesasAcessorias', function(done) {
			expect(nfceObj.impostos.despesasAcessorias).to.equal(expect_data.impostos.despesasAcessorias);
			done();
		});
		it('totalIPI', function(done) {
			expect(nfceObj.impostos.totalIPI).to.equal(expect_data.impostos.totalIPI);
			done();
		});
		it('totalNFE', function(done) {
			expect(nfceObj.impostos.totalNFE).to.equal(expect_data.impostos.totalNFE);
			done();
		});
		it('totalDescontos', function(done) {
			expect(nfceObj.impostos.totalDescontos).to.equal(expect_data.impostos.totalDescontos);
			done();
		});
		it('totalII', function(done) {
			expect(nfceObj.impostos.totalII).to.equal(expect_data.impostos.totalII);
			done();
		});
		it('pis', function(done) {
			expect(nfceObj.impostos.pis).to.equal(expect_data.impostos.pis);
			done();
		});
		it('cofins', function(done) {
			expect(nfceObj.impostos.cofins).to.equal(expect_data.impostos.cofins);
			done();
		});
		it('tributosAprox', function(done) {
			expect(nfceObj.impostos.tributosAprox).to.equal(expect_data.impostos.tributosAprox);
			done();
		});
		it('icmsFCP', function(done) {
			expect(nfceObj.impostos.icmsFCP).to.equal(expect_data.impostos.icmsFCP);
			done();
		});
		it('icmsIntUfDest', function(done) {
			expect(nfceObj.impostos.icmsIntUfDest).to.equal(expect_data.impostos.icmsIntUfDest);
			done();
		});
		it('icmsIntUfremet', function(done) {
			expect(nfceObj.impostos.icmsIntUfremet).to.equal(expect_data.impostos.icmsIntUfremet);
			done();
		});
	});

	describe('NFCe-transporte', function() {
		it('modalidade', function(done) {
			expect(nfceObj.transporte.modalidade).to.equal(expect_data.transporte.modalidade);
			done();
		});
	});

	describe('NFCe-cobranca', function() {
		it('forma', function(done) {
			expect(nfceObj.cobranca.forma).to.equal(expect_data.cobranca.forma);
			done();
		});
		it('valor', function(done) {
			expect(nfceObj.cobranca.valor).to.equal(expect_data.cobranca.valor);
			done();
		});
		it('cnpjCred', function(done) {
			expect(nfceObj.cobranca.cnpjCred).to.equal(expect_data.cobranca.cnpjCred);
			done();
		});
		it('bandeira', function(done) {
			expect(nfceObj.cobranca.bandeira).to.equal(expect_data.cobranca.bandeira);
			done();
		});
		it('autorizacao', function(done) {
			expect(nfceObj.cobranca.autorizacao).to.equal(expect_data.cobranca.autorizacao);
			done();
		});
		it('tipoIntegracao', function(done) {
			expect(nfceObj.cobranca.tipoIntegracao).to.equal(expect_data.cobranca.tipoIntegracao);
			done();
		});
	});

	describe('NFCe-info', function() {
		it('formatoImpressao', function(done) {
			expect(nfceObj.info.formatoImpressao).to.equal(expect_data.info.formatoImpressao);
			done();
		});
		it('qrcode', function(done) {
			expect(nfceObj.info.qrcode).to.equal(expect_data.info.qrcode);
			done();
		});
		it('descricao', function(done) {
			expect(nfceObj.info.descricao).to.equal(expect_data.info.descricao);
			done();
		});
	});

});