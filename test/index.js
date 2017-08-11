var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

var mimercatoNfce = require('../index');
var nfceGO = mimercatoNfce.nfceGO;

describe('#nfce-DF', function() {
	it('Without nfce key', function() {
		nfceGO().should.equal('');
	});
	it('Get nfce', function(done) {
		nfceGO('52170833200056042143650220000016921000046922').then(res => {
			expect(res).to.equal('GO');
			done();
		});		
	});
});