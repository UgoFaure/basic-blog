var ObjectId = require('mongodb').ObjectID;

module.exports = function(app) {

  //fonction redirigant sur une fenetre permettant de créer un article puis l'ajoute à la liste des articles  VERBE POST
  app.post("/post/create", function(req, res) {
    console.log(req.body);
    if(Object.keys(req.body).length != 0) //si la requete contient quelque chose 
    {
      app.db.collection('article').insert({//INSERTION
      "titre": req.body.titre,
      "date": new Date().toISOString(),
      "auteur": req.body.auteur,
      "resume": req.body.resume,
      "contenu": req.body.contenu,
      });
      res.redirect("/");
    }
    else
    {  
      res.render("newArticle.html");
    }
  });

  //fonction permettant d'accéder à la fenetre d'affichage complet d'un article VERBE GET
  app.get("/post/:id", function(req, res) {
    app.db.collection("article").findOne({"_id": new ObjectId(req.params.id)}, function(error, results) {
      if (error) throw error;
      res.render("unArticle", {"article" : results});
    });
  });

  //fonction permettant de supprimer l'article directement depuis la liste des articles VERBE GET
  app.get("/post/delete/:id", function(req, res) {
    app.db.collection('article').remove({"_id": new ObjectId(req.params.id)}, function(error, results){
      if(error) throw error;
    });
    res.redirect("/");
});

 //fonction permettant de supprimer un article sélectionner via la fonction d'affichage complet d'un article VERBE GET
  app.get("/post/sup/:id", function(req, res) {
      app.db.collection('article').remove({"_id": new ObjectId(req.params.id)}, function(error, results){
        if(error) throw error;
      });
      res.redirect("/");
  })
}
