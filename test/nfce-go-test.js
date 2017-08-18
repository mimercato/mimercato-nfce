// imports
var chai = require('chai')
var expect = chai.expect

// ------
var mimercatoNfce = require('../index');
var nfceGO = mimercatoNfce.nfceGO;

// data
var go_data = require('./data/expected-go-data')

describe('#NFCe-GO', function() {
	var nfceObj;
	var expect_data;
	
	before(function(done){
		nfceGO('52170826969401000148650040000140431040188685').then(nfce => {
			nfceObj = nfce;
			expect_data = go_data
			done();
		});
	});
	
	describe('NFCe', function() {
		it('NFCe-modelo', function(done) {
			expect(nfceObj.nfe.modelo).to.equal(expect_data.nfe.modelo);
			done();
		});
		it('NFCe-serie', function(done) {
			expect(nfceObj.nfe.serie).to.equal(expect_data.nfe.serie);
			done();
		});
		it('NFCe-numero', function(done) {
			expect(nfceObj.nfe.numero).to.equal(expect_data.nfe.numero);
			done();
		});
		it('NFCe-dataEmissao', function(done) {
			expect(nfceObj.nfe.dataEmissao).to.equal(expect_data.nfe.dataEmissao);
			done();
		});
		it('NFCe-valor', function(done) {
			expect(nfceObj.nfe.valor).to.equal(expect_data.nfe.valor);
			done();
		});
		it('NFCe-cnpj', function(done) {
			expect(nfceObj.nfe.cnpj).to.equal(expect_data.nfe.cnpj);
			done();
		});
		it('NFCe-nome', function(done) {
			expect(nfceObj.nfe.nome).to.equal(expect_data.nfe.nome);
			done();
		});
		it('NFCe-inscricaoEstadual', function(done) {
			expect(nfceObj.nfe.inscricaoEstadual).to.equal(expect_data.nfe.inscricaoEstadual);
			done();
		});
		it('NFCe-uf', function(done) {
			expect(nfceObj.nfe.uf).to.equal(expect_data.nfe.uf);
			done();
		});
		it('NFCe-processo', function(done) {
			expect(nfceObj.nfe.processo).to.equal(expect_data.nfe.processo);
			done();
		});
		it('NFCe-processoVer', function(done) {
			expect(nfceObj.nfe.processoVer).to.equal(expect_data.nfe.processoVer);
			done();
		});
		it('NFCe-tipoEmissao', function(done) {
			expect(nfceObj.nfe.tipoEmissao).to.equal(expect_data.nfe.tipoEmissao);
			done();
		});
		it('NFCe-finalidade', function(done) {
			expect(nfceObj.nfe.finalidade).to.equal(expect_data.nfe.finalidade);
			done();
		});
		it('NFCe-natureza', function(done) {
			expect(nfceObj.nfe.natureza).to.equal(expect_data.nfe.natureza);
			done();
		});
		it('NFCe-tipoOperacao', function(done) {
			expect(nfceObj.nfe.tipoOperacao).to.equal(expect_data.nfe.tipoOperacao);
			done();
		});
		it('NFCe-formaPagamento', function(done) {
			expect(nfceObj.nfe.formaPagamento).to.equal(expect_data.nfe.formaPagamento);
			done();
		});
		it('NFCe-digest', function(done) {
			expect(nfceObj.nfe.digest).to.equal(expect_data.nfe.digest);
			done();
		});
		it('NFCe-eventos', function(done) {
			expect(nfceObj.nfe.eventos).to.equal(expect_data.nfe.eventos);
			done();
		});
		it('NFCe-protocolo', function(done) {
			expect(nfceObj.nfe.protocolo).to.equal(expect_data.nfe.protocolo);
			done();
		});
		it('NFCe-dataAutorizacao', function(done) {
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
	
	describe('NFCe-produtos', function() {
		it('Total of products expected', function(done) {
			expect(nfceObj.produtos.length).to.equal(12);
			done();
		});
		it('aliquotaICMS Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].aliquotaICMS).to.equal(product.aliquotaICMS);				
			});
			done();
		});
		it('baseCalculoICMS Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].baseCalculoICMS).to.equal(product.baseCalculoICMS);				
			});
			done();
		});
		it('cfop Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].cfop).to.equal(product.cfop);
			});
			done();
		});
		it('codigo Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].codigo).to.equal(product.codigo);
			});
			done();
		});
		it('codigoEANComercial Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].codigoEANComercial).to.equal(product.codigoEANComercial);
			});
			done();
		});
		it('codigoEANTributavel Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].codigoEANTributavel).to.equal(product.codigoEANTributavel);
			});
			done();
		});
		it('codigoNCM Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].codigoNCM).to.equal(product.codigoNCM);
			});
			done();
		});
		it('confinsCST Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].confinsCST).to.equal(product.confinsCST);
			});
			done();
		});
		it('descricao Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].descricao).to.equal(product.descricao);
			});
			done();
		});
		it('indicadorComposicao Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].indicadorComposicao).to.equal(product.indicadorComposicao);
			});
			done();
		});
		it('modalidadeICMS Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].modalidadeICMS).to.equal(product.modalidadeICMS);
			});
			done();
		});
		it('origemMercadoria Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].origemMercadoria).to.equal(product.origemMercadoria);
			});
			done();
		});
		it('pisCST Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].pisCST).to.equal(product.pisCST);
			});
			done();
		});
		it('quantidade Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].quantidade).to.equal(product.quantidade);
			});
			done();
		});
		it('quantidadeComercial Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].quantidadeComercial).to.equal(product.quantidadeComercial);
			});
			done();
		});
		it('quantidadeTributavel Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].quantidadeTributavel).to.equal(product.quantidadeTributavel);
			});
			done();
		});
		it('tributacaoICMS Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].tributacaoICMS).to.equal(product.tributacaoICMS);
			});
			done();
		});
		it('unidade Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].unidade).to.equal(product.unidade);
			});
			done();
		});
		it('unidadeComercial Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].unidadeComercial).to.equal(product.unidadeComercial);
			});
			done();
		});
		it('unidadeTributavel Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].unidadeTributavel).to.equal(product.unidadeTributavel);
			});
			done();
		});
		it('valor Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].valor).to.equal(product.valor);
			});
			done();
		});
		it('valorAproxTributos Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].valorAproxTributos).to.equal(product.valorAproxTributos);
			});
			done();
		});
		it('valorICMS Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].valorICMS).to.equal(product.valorICMS);
			});
			done();
		});
		it('valorUnitarioComercial Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].valorUnitarioComercial).to.equal(product.valorUnitarioComercial);
			});
			done();
		});
		it('valorUnitarioTributavel Test', function(done) {
			expect_data.produtos.forEach(function(product, i) {
				expect(nfceObj.produtos[i].valorUnitarioTributavel).to.equal(product.valorUnitarioTributavel);
			});
			done();
		});
	});
	
});