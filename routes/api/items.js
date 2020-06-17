const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

// @route GET api/items
// @desc Get all items
// route is just slash because we're already in router (see server.js)
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route POST api/items
// @desc Create a new item
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save()
    .then(item => res.json(item));
});

module.exports = router;