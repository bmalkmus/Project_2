var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/api/recipe", isAuthenticated, function(req, res) {
    db.ingredients.findAll({}).then(function(dbIngred) {
      res.json(dbIngred);
    });
  });

  //   returns single recipe
  app.get("/api/recipe/:id", isAuthenticated, function(req, res) {
    db.recipe
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbIngred) {
        res.json(dbIngred);
      });
  });

  //   updates recipe to database
  app.post("api/recipe", isAuthenticated, function(req, res) {
    db.recipe.create(req.body).then(function(dbIngred) {
      res.json(dbIngred);
    });
  });

  //   deletes single recipe
  app.delete("/api/recipe/:id", isAuthenticated, function(req, res) {
    db.recipe
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbIngred) {
        res.json(dbIngred);
      });
  });
};
