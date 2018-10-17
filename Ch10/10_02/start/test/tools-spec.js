var expect = require('chai').expect;
var tools = require('../lib/tools');

describe('Tools', function() {
  describe('printName()', function() {
    it('should print the last name first', function() {
      var results = tools.printName({ first: 'Alex', last: 'Banks' });
      expect(results).to.equal('Banks, Alex');
    });
  });

  describe('loadWiki()', function() {
    this.timeout(5000); // sets the amount of time that the function will wait for done() to be invoked -- default is 2000 (2 sec)

    it("should load Abraham Lincoln's wikipedia page", function(done) {
      tools.loadWiki({ first: 'Abraham', last: 'Lincoln' }, function(html) {
        expect(html).to.be.ok; // checks to make sure 'html' is defined
        done();
      });
    });
  });
});
