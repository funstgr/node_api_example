const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', (req, res, next)=> {
  res.status(200).json({
    message: 'Handling Get requests to /products',
  });
});

router.post('/:order', (req, res, next)=> {
  const order = req.params.order;
  res.status(200).json({
    message: 'Handling Post requests to /orders',
    order: order,
  });
});

router.get('/:orderId', (req, res, next)=> {
  const id = req.params.orderId;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special id',
      id: id,
    });
  } else {
    res.status(200).json({
      message: 'you passed id',
      id: id,
    });
  }
  // res.status(200).json({
  //     message: 'Handling Get requests to /products'
  // })
});

router.patch('/:orderId', (req, res, next)=> {
  const id = req.params.orderId;
  res.status(200).json({
    message: 'You updated product ID',
    id: id,
  });
});

router.delete('/:orderId', (req, res, next)=> {
  const id = req.params.orderId;
  res.status(200).json({
    message: 'You deleted product Id',
    id: id,
  });
});

module.exports = router;
