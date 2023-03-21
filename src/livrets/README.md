# Cahier des charges demandé à Chat GPT-4

## Version initiale

Écris moi un jeux pour réviser les multiplication à un enfant selon les contraintes suivantes :

- Une première page demande le choix des livrets à réviser. Le choix se fait dans des cases à cocher. Les nombres vont de 2 à 12. Un input demande également la durée maximale de chaque question. Par défaut, elle est fixée à 5 secondes. Un autre input demande le nombre de questions. Par défaut, la valeur est de 30. Un bouton lance le jeux.
- Une question est demandée à l’utilisateur sous forme d’une multiplication. L’utilisateur doit répondre dans le temps imparti. Si la réponse est fausse ou si le temps est écoulé, le résultat est affiché durant 2 secondes. Ensuite, la question suivante est affichée.
- A la fin, une page indique le temps total et le score.
- Le programmes est écrit en html, css, javascript avec la librairie bootstrap et jquery.

## Modifications demandées

1. donne moi les modifs pour désactiver le bouton valider lorsque la bonne réponse est affichée
2. et comment montrer à l'utilisateur que le bouton est désactivé ?
3. peut-tu faire une fonction qui génére automatiquement les checkbox de 2 à 12
4. que modifier pour pouvoir taper la touche "enter" pour valider
5. que faire pour que le curseur soit automatiquement sur l'input de la réponse