// routes/index.js
const myRoutes = require('./my_routes');
module.exports = function(app, db) {
  myRoutes(app, db);
  // Other route groups could go here, in the future
};