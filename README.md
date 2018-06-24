
- Placer le dossier MonBasicBlog sur le Bureau (chemin :/home/nosql/Bureau/MonBasicBlog)

- Dans un premier temps, il nous faut créer la base de données:
	-Ouvrir un terminal de commande 
	-Entrer ' systemctl enable mongod '
	-Entrer ' service mongod start '
	-Entrer ' mongo '
	-Entrer ' use basicBlog ' dans le shell mongo

- Une fois la base de données crées, il faut ajouter des articles, pour cela on utilise un script permettant de remplir la base avec des données générées aléatoirement:
	-Toujours dans le même shell mongo entrer load("/home/nosql/Bureau/MonBasicBlog/script.js")
	-Le script s'est normalement éxécuté, cependant nous n'avons pas pu mettre en place la  génération aléatoire de données par manque de temps et surtout problème de VM, ce script permet tout de même de pouvoir réaliser tous les tests car il génére des documents dans notre collection.

- Pour démarrer le serveur permettant de tester le projet :
	- Ouvrir un terminal de commande
	- Se déplacer jusqu'à l'emplacement du dossier MonBasicBlog (chemin : /home/nosql/Bureau/MonBasicBlog)
	- Entrer ' node server.js'
	- Le serveur démarre rendez-vous sur Mozilla Firefox
	- Entrer l'url localhost:8000/



Le dump de la base se trouve dans le dossier Bureau/MonBasicBlog/dump/basicBlog
Pour réaliser le dumb j'ai du :
	-Ouvrir un terminal de commande
	-Entrer ' mongodump '
	-Entrer ' mongodump --db basicBlog --collection article '

Je n'ai pas pull request le dump de la base car je ne pouvez pas commit de dossier sans utiliser de commande git mais la procédure pour mettre en place le dumb est expliquée.


---------------------------------------------EXPLICATION-------------------------------------------

Les test de création d'article et de suppression ont été fait manuellement, ils sont fonctionnels.
Faire tout de même attention à ne pas effectuer les manipulations d'ajout et de suppresions trop rapidement ou du moins rafraichîr la page si vous voyez que votre action n'a pas été prise en compte.

La première page accesible à l'url localhost:8000/ affiche la liste des articles avec le titre, la date, l'auteur et le résumé ainsi q'un lien cliquable sur la dernière colonne permettant de supprimer la ligne en question directement depuis cette page. Le lien cliquable sur le titre d'un article permet de se déplacer dans une deuxième fenêtre à l'adresse localhost:8000/post/id. 

Cette deuxième fenêtre affiche l'intégralité de l'article séléctionner (donc son contenu également), on peut supprimer l'article depuis cette page ou revenir au menu précedent avec le bouton retour.

Le dernière élément sur la première page est le bouton 'Ajouter un article' qui permet lorsque l'on appui dessus de nous rediriger vers une troisième page à l'adresse localhost:8000/post/create afin d'ajouter un article directement dans la première page lorsque l'on entre tous les champs et que l'on appuie sur le bouton ajouter, on peut également annuler l'action en pressant le bouton Retour.


Par un manque de temps dû aux examens finaux mais surtout par de gros problème de VM et une absence de ma part(Ludovic) nous n'avons pas pu avancer sur le projet et avons eu énormement de mal à avancer. Nous préférons tout de même rendre notre porjet en l'état actuel pour rester dans les temps malgrès que nous n'ayons pas finalisés les tests et les scripts. Merci.



