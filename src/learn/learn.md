# The Single Responsibility Principle (SRP)

Le principe de responsabilité unique (SRP) est un principe de conception logiciel qui stipule qu'une classe (ou une méthode) ne devrait avoir qu'une seule raison de changer. 
En d'autres termes, une classe devrait être responsable d'une seule fonctionnalité ou d'un seul ensemble de tâches étroitement liées.

Le SRP est le premier des principes SOLID, un ensemble de cinq principes de conception logiciel couramment utilisés dans la programmation orientée objet. 
Les autres principes SOLID sont l'interface de ségrégation (ISP), le principe de remplacement de Liskov (LSP), le principe d'ouverture-fermeture (OCP) et le principe de dépendance d'inversion (DIP).

Le SRP est important car il permet de créer des classes plus faciles à comprendre, à maintenir et à tester. 
Des classes qui respectent le SRP sont moins susceptibles de contenir des bogues et sont plus faciles à adapter aux changements.

Voici quelques exemples de classes qui ne respectent pas le SRP :

Une classe qui gère à la fois les données et l'affichage d'une application.

Une classe qui envoie des courriels et des SMS.

Une classe qui calcule l'aire d'un cercle et d'un carré.

Toutes ces classes ont plusieurs raisons de changer. 

Par exemple, si vous devez modifier la façon dont les données sont affichées, vous devrez modifier la classe qui gère les données et l'affichage. 

Si vous devez modifier la façon dont les courriels sont envoyés, vous devrez modifier la classe qui envoie des courriels et des SMS. 

Et si vous devez modifier la façon dont l'aire d'un cercle est calculée, vous devrez modifier la classe qui calcule l'aire d'un cercle et d'un carré.

En suivant le SRP, vous pouvez créer des classes plus petites et plus modulaires qui sont plus faciles à comprendre et à maintenir. Cela peut vous aider à écrire du code plus fiable et plus facile à adapter aux changements.
