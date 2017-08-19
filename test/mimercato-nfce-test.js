// imports
var chai = require('chai')
var expect = chai.expect

// -------
var mimercatoNFCe = require('../lib/mimercato-nfce');

// tests
describe('#NFCe-parser', function() {
	it('Invalid state of query selector', function(done) {
		expect(mimercatoNFCe.nfceQuery('BR')).to.equal('Select a valid state of Brazil.');
		done();
	});
});