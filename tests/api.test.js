const request = require('supertest');
const mongoose = require('mongoose');
const expect = require('chai').expect;
const server = require('../server');
const config = require('../config/config');

describe('Express API', () => {

  beforeEach((done) => {
    mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
      mongoose.connection.db.dropDatabase(() => {
        done();
      })
    })
  })

  it('gets all list items', async () => {
    const response = await request(server)
      .get('/api/items');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal([]);
  });

  it('can post a new item', async () => {
    let data = { name: "Milk" }
    const response = await request(server)
      .post('/api/items')
      .send(data)
      .set('Accept', 'application/json');
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Milk");
  });

});