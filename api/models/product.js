const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// eslint-disable-next-line new-cap
const productSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  price: Number,
});

module.exports = mongoose.model('Product', productSchema);
