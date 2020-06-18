const request = require('supertest');
const mongoose = require('mongoose');
const expect = require('chai').expect;
const server = require('../server');
const config = require('../config/config');

describe('Express API', () => {
  let data = { name: "Milk" }
  let id;

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
    const response = await request(server)
      .post('/api/items')
      .send(data)
      .set('Accept', 'application/json');
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Milk");
  });

  it('can delete an item which exists', async () => {
    // Add an item
    const postResponse = await request(server)
      .post('/api/items')
      .send(data)
      .set('Accept', 'application/json');
    // save the new items ID for use in deleting
    id = postResponse.body._id
    const deleteResponse = await request(server)
      .delete(`/api/items/${id}`)
      .set('Accept', 'application/json');
    expect(deleteResponse.status).to.equal(200);
    expect(deleteResponse.body.success).to.equal(true);
  });

  it('can\'t delete an item which doesn\'t exists', async () => {
    const response = await request(server)
      .delete(`/api/items/12345`)
      .set('Accept', 'application/json');
    expect(response.status).to.equal(404);
    expect(response.body.success).to.equal(false);
  });

});