const expect = require('chai').expect
const app = require('../server')

describe('Server', () => {

  it('exists', () => {
    expect(app).to.be.a('function');
  });

  it('runs on the test port', () => {
    expect(app.port).to.equal(5001)
  });

});
