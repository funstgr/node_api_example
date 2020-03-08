const express = require('express');
const app = express();
const logger = require('morgan');
const parser = require('body-parser');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://mongo_admin:' +
    process.env.MONGO_DB_PW +
    '@cluster0-rhuhs.gcp.mongodb.net/test?retryWrites=true&w=majority',
);

app.use(logger('dev'));
app.use(parser.urlencoded({extended: false}));
app.use(parser.json());

app.use((req, res, next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  if ( req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Headers',
        'POST, PUT, DELETE, PATCH, GET');
    return res.status(200).json({});
  }
  next();
});

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next)=> {
  const errror = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next)=>{
  res.status(error.status|| 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
