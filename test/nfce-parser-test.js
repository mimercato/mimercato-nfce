// imports
var chai = require('chai')
var expect = chai.expect

// -------
var nfceParser = require('../lib/nfce-parser');

// tests
describe('#NFCe-parser', function() {
	it('Invalid state of query selector', function(done) {
		expect(nfceParser.nfceQuerySelector('BR')).to.equal('Select a valid state of Brazil.');
		done();
	});
});