var posts = require("./posts");

module.exports = function(app) {
  //Verbe HTTP get
  app.get("/", function(req, res) {

  app.db.collection("article").find({}, {"sort" : ['datefield', 'asc']} ).toArray(function (error, results) {
        if (error) throw error;
        //console.log(results);
        res.render("index", {"article" : results});
    });
  });

  // Register posts endpoint
  posts(app);
}