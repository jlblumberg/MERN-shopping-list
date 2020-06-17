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
    const response = await request(server).get('/api/items');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal([]);
  });

});