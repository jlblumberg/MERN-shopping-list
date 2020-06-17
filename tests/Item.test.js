const mongoose = require('mongoose');
const expect = require('chai').expect;
const Item = require('../models/Item').Item;

describe('Items', () => {

  it('can be saved to the test database', () => {
    const testItem = Item({
      name: 'test-name'
    })
    try {
      testItem.save();
    } catch (err) {
      throw new Error(err);
    }
  });

  it('doesn\'t save a user to the database if the field is wrong', async () => {
    const testItem = Item({
      blah: 'test-name'
    })
    try {
      await testItem.save();
    } catch (err) {
      expect(err._message).to.equal('item validation failed');
    }
  });

  it('doesn\'t save a user to the database if the required field is missing', async () => {
    const testItem = Item({
      date: Date.now 
    })
    try {
      await testItem.save();
    } catch (err) {
      expect(err._message).to.equal('item validation failed')
    }
  });
  
});