// routes/my_routes.js
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","POST, GET, OPTIONS, DELETE, PUT, HEAD");
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  
  app.get('/products', (req, res) => {
    const details = {};
    db.collection('products2').find(details).toArray((err, items) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.status(200).json(items);
      }
    });
  });

  app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('products2').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

 app.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('products2').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Product ' + id + ' deleted!');      
      }
    });
  });

  //Code from Medium article
  /*app.post('/products', (req, res) => {
    const product = { name: req.body.name, description: req.body.description, category: req.body.category, price: req.body.price, imagefile: req.body.imagefile }
    // You'll create your note here.
    db.collection('products2').insert(product, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });*/
  
  //Code from Heroku
  app.post("/products", function(req, res) {
    var newProduct = req.body;

    if (!req.body.name) {
     handleError(res, "Invalid user input", "Must provide a name.", 400);
      console.log("No name provided");
    }
    if (!req.body.description) {
      handleError(res, "Invalid user input", "Must provide a description.", 400);
    }
    if (!req.body.category) {
      handleError(res, "Invalid user input", "Must provide a category.", 400);
    }
    if (!req.body.price) {
      handleError(res, "Invalid user input", "Must provide a price.", 400);
    }
    if (!req.body.imagefile) {
      handleError(res, "Invalid user input", "Must provide an imagefile.", 400);
    }

    db.collection('products2').insertOne(newProduct, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new product");
      } else {
        console.log("Product created");
        res.status(201).json(doc.ops[0]);
      }
    });
  });

  app.put('/products/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const product = { name: req.body.name, description: req.body.description, category: req.body.category, price: req.body.price, imagefile: req.body.imagefile };
    db.collection('products2').update(details, product, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(product);
      } 
    });
  });
};