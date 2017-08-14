var chai = require('chai')
var expect = chai.expect
var should = chai.should();

var mimercatoNfce = require('../index');
var nfceGO = mimercatoNfce.nfceGO;

var nfceParser = require('../lib/nfce-parser');

describe('#NFCe-parser', function() {
	it('Invalid state of query selector', function(done) {
		expect(nfceParser.nfceQuerySelector('BR')).to.equal('Select a valid state of Brazil.');
		done();
	});
});

describe('#NFCe-GO', function() {
	var nfceObj;
	before(function(done){
		nfceGO('52170826969401000148650040000140431040188685').then(nfce => {
			nfceObj = nfce;
			done();
		});
	});
	it('NFCe-modelo', function(done) {
		expect(nfceObj.nfce.modelo).to.equal('65');
		done();
	});
	it('NFCe-serie', function(done) {
		expect(nfceObj.nfce.serie).to.equal('4');
		done();
	});
	it('NFCe-numero', function(done) {
		expect(nfceObj.nfce.numero).to.equal('14043');
		done();
	});
	it('NFCe-dataEmissao', function(done) {
		expect(nfceObj.nfce.dataEmissao).to.equal('09/08/2017 19:13:30-03:00');
		done();
	});
	it('NFCe-dataEntrada', function(done) {
		expect(nfceObj.nfce.dataEntrada).to.equal(null);
		done();
	});
	it('NFCe-valor', function(done) {
		expect(nfceObj.nfce.valor).to.equal('38,75');
		done();
	});
	it('NFCe-cnpj', function(done) {
		expect(nfceObj.nfce.cnpj).to.equal('26.969.401/0001-48');
		done();
	});
	it('NFCe-nome', function(done) {
		expect(nfceObj.nfce.nome).to.equal('Alto Cerrado Supermercado Ltda');
		done();
	});
	it('NFCe-inscricaoEstadual', function(done) {
		expect(nfceObj.nfce.inscricaoEstadual).to.equal('106835750');
		done();
	});
	it('NFCe-uf', function(done) {
		expect(nfceObj.nfce.uf).to.equal('GO');
		done();
	});
	it('NFCe-processo', function(done) {
		expect(nfceObj.nfce.processo).to.equal('0 - com aplicativo do Contribuinte');
		done();
	});
	it('NFCe-processoVer', function(done) {
		expect(nfceObj.nfce.processoVer).to.equal('1.02.53');
		done();
	});
	it('NFCe-tipoEmissao', function(done) {
		expect(nfceObj.nfce.tipoEmissao).to.equal('1 - Normal');
		done();
	});
	it('NFCe-finalidade', function(done) {
		expect(nfceObj.nfce.finalidade).to.equal('1 - Normal');
		done();
	});
	it('NFCe-natureza', function(done) {
		expect(nfceObj.nfce.natureza).to.equal('Venda de Mercadorias');
		done();
	});
	it('NFCe-tipoOperacao', function(done) {
		expect(nfceObj.nfce.tipoOperacao).to.equal('1-saída');
		done();
	});
	it('NFCe-formaPagamento', function(done) {
		expect(nfceObj.nfce.formaPagamento).to.equal('0 - À vista');
		done();
	});
	it('NFCe-digest', function(done) {
		expect(nfceObj.nfce.digest).to.equal('petwehlnyonJYlKNpxKjXz/CoVw=');
		done();
	});
	it('NFCe-eventos', function(done) {
		expect(nfceObj.nfce.eventos).to.equal('Autorização de Uso (Cód.: 110100)');
		done();
	});
	it('NFCe-protocolo', function(done) {
		expect(nfceObj.nfce.protocolo).to.equal('152170805503001');
		done();
	});
	it('NFCe-dataAutorizacao', function(done) {
		expect(nfceObj.nfce.dataAutorizacao).to.equal('09/08/2017 19:12:46-03:00');
		done();
	});
	it('NFCe-dataInclusao', function(done) {
		expect(nfceObj.nfce.dataInclusao).to.equal(null);
		done();
	});
});

// describe('#nfce-DF', function() {
// 	it('Without nfce key', function() {
// 		nfceGO().should.equal('');
// 	});
// 	it('Get nfce', function(done) {
// 		nfceGO('52170826969401000148650040000140431040188685').then(res => {
// 			expect(res).to.equal('GO');
// 			done();
// 		});
		
// 		// fs.readFile('./nfce-tmp/CConsultaCompletaNFEJSF.html', function (err, data) {
// 		// 	if (err) {
// 		// 		throw err;
// 		// 	}
// 		// 	// var html = data.toString();

// 		// 	// const dom = new JSDOM(html);
// 		// 	// console.log(dom.window.document.querySelector('body > form > div > div.rich-panel-body > table > tbody > tr:nth-child(10) > td > table > tbody > tr:nth-child(2) > td:nth-child(4) > table').textContent); // "Hello world"

// 		// 	// console.log(html);
// 		// 	// var $ = cheerio.load(html);
// 		// 	// var list = $('body > form > div > div.rich-panel-body > table > tbody > tr');
// 		// 	// console.log(list);
// 		// 	// list.each(function(i, result) {
// 		// 	// 	console.log(">>> PRODUCT");
// 		// 	// 	console.log(i);
// 		// 	// 	console.log($(result));
// 		// 	// });
// 		// 	// console.log(str);
// 		// 	done();
// 		// });		
// 	});
// });