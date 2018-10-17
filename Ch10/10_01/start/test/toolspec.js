const expect = require('chai').expect;
const tools = require('../lib/tools');

describe('printName()', () => {
  it('should print the last name first', () => {
    let results = tools.printName({ first: 'Warren', last: 'Kwong' });

    expect(results).to.equal('Kwong, Warren');
  });
});
