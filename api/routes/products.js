const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');

router.get('/', (req, res, next)=> {
  const removeParams = '-__v';
  Product.find().select(removeParams).exec().then((docs) => {
    console.log(docs);
    if (docs.length >= 0) {
      res.status(200).json({
        count: docs.length,
        products: docs,
      });
    } else {
      res.status(200).json({message: 'No products found'});
    }
  }).catch((err)=> {
    console.log(err);
    res.status(500).json({error: err});
  });
});

router.post('/', (req, res, next)=> {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  product.save().then((result) => {
    res.status(200).json({
      message: 'Added new product to /products',
      product: result,
    });
  }).catch( (err) => console.log(err));
});

router.get('/:productId', (req, res, next)=> {
  const id = req.params.productId;
  console.log(id);
  Product.findById(id)
      .exec()
      .then((doc)=> {
        if (doc) {
          res.status(200).json(doc);
        } else {
          res.status(404).json({message: 'No valid entry found for Id:', id});
        }
      }).catch((err) => {
        console.log(err);
        res.status(500).json({error: err});
      });
});

router.patch('/:productId', (req, res, next)=> {
  const id = req.params.productId;
  const updatedProps = {};
  for (const props of req.body) {
    updatedProps[props.propName] = props.value;
  }
  Product.update({_id: id}, {$set: updatedProps}).exec().then((result)=>{
    if (result.nModified ===1) {
      res.status(200).json({
        result,
        message: 'You updated product ID',
        id: id,
      });
    } else {
      const message = 'No product was modified. There was a problem with your request.' +
      ' The object does not exist or it has not changed for ID';
      res.status(200).json({
        result,
        message,
        id: id,
      });
    }
  }).catch((err)=>{
    console.log(err);
    res.status(500).json({
      error: err,
      message: 'There was an issue when trying to update ID:' + id,
    });
  });
});

router.delete('/:productId', (req, res, next)=> {
  const id = req.params.productId;
  Product.remove({_id: id}).exec().then((result)=>{
    if (result.deletedCount > 0) {
      res.status(200).json({
        result,
        message: 'You deleted product Id',
        id: id,
      });
    } else {
      res.status(200).json({
        result,
        message: 'This was not a valid product Id',
        id: id,
      });
    }
  }).catch((err)=>{
    console.log(err);
    res.status(500).json({
      error: err,
      message: 'There was an issue when trying to remove ID:' + id,
    });
  });
});

module.exports = router;
