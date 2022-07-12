# TF1 interview exercise

Made by Kajan Siva.

## Unfinished work

- Choose a different carousel library which will enable to be more precise on the style
- Add tbe plus icon on the thumbnails
- Do some performance improvements
    - To fetch only the necessary images to render
    - To fetch data with a pagination to avoid fetching the whole data at once
- Configure and apply ESLint rules properly

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

# Compte-rendu de l'exercice

## Problèmes rencontrés

- La maquette Figma ne correspond à aucune résolution standard d'écran.
- La zone du carousel n'est centré ni verticalement ni horizontalement dans la frame "Program Carousel", ce qui me fait demander si c'est vraiment voulu.
- La position des flèches n'est pas homogène par rapport aux miniatures. Si on veut toujours un espacement de 24px entre les images, dans la maquette, on devrait apercevoir une partie de l'image suivante.
- Vu que sur la maquette on ne voit aucun exemple d'image croppé, et que le carousel ne va pas jusqu'aux bords de la page, on ne sait pas où les images doivents être croppés.

## Questions sur spécifications manquantes

- Est-ce que les flèches doivent permettre de scroller les éléments un à un ou sur plusieurs éléments d'un coup ?
- Comment doit être géré le responsive ?
- Comment le composant doit réagir sur une interface tactile ?
- Quelle image afficher lorsqu'une image n'est pas disponible ?
- Qu'est-ce qu'on doit afficher lorsque les données chargent ?
- Est-ce qu'on doit afficher toutes les données dans le carousel ? Niveau UX, 40 semble être un nombre maximum raisonnable d'éléments à afficher dans un carousel. Là je récupère 100 éléments, ce qui me semble beaucoup pour un carousel.
- Comment traiter les titres qui sont trop long ?

## Amélioration possible dans le jeu de données

- Dans l'entité `program`, on a une propriété `image_id` qui est redondant avec la propriété `thumnail.id`. On peut la supprimer.
- Il y a une typo sur le nom de l'entité `thumnail` qui devrait être `thumbnail`.

## Feedback global sur le test

J'ai eu beaucoup de mal à me projeter dans l'exercice à cause de plusieurs aspects.
La maquette présente beaucoup d'incohérence et aurait nécessité un aller-retour avec l'équipe design avant de commencer le travail.

Ensuite, vu que tout était à faire de zéro et que je n'avais aucune indication sur les éléments qui comptent le plus, l'exercice a été personnellement plus long qu'estimé. Selon les aspects à tester chez le candidat, ça aurait valu de partir d'un socle de base à faire évoluer.

Enfin, au niveau des questions que je devais préparer. Je n'avais pas compris que je devais les noter directement dans Github. Je pensais que je devais préparer des questions et remarques pour l'échange durant l'entretien.
Et de manière générale, elle me semblent assez flou. Vu que la spécification est minimaliste, je vois beaucoup de questions à poser à ce niveau et je vois les incohérences à remonter sur la maquette, mais j'ai du mal à voir ce qu'on veux tester à travers ces questions.
