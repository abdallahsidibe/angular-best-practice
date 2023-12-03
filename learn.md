# LIFT

### Locate code quickly : Localisez le code rapidement

### Identify code at a glance : Identifiez le code en un coup d'oeil

### Flattest structure possible:

structure la plus plate possible
Une structure plate signifie que votre application est divisée en un nombre minimum de composants. Chaque composant est responsable d'une seule tâche ou fonction.
Cela rend votre application plus facile à comprendre, à maintenir et à tester.

### Try to be DRY:

"Try to be DRY" signifie "Essayez d'être DRY". DRY est un acronyme pour "Don't Repeat Yourself". En français, cela signifie "Ne répétez pas vous-même".

Cette règle d'or de la programmation signifie que vous devez éviter de copier et coller du code. Si vous trouvez que vous copiez et collez du code dans votre application Angular, il est probable que vous puissiez le refactoriser pour le rendre plus réutilisable.

Voici quelques conseils pour éviter de répéter du code dans votre application Angular :

Utilisez des constantes et des variables pour stocker des données qui sont utilisées dans plusieurs endroits.
Créez des fonctions et des méthodes pour regrouper du code qui est utilisé dans plusieurs endroits.
Utilisez des directives pour réutiliser l'apparence et le comportement de votre code.

    // Code non refactorisé

    function myFunction(a, b) {
       return a + b;
    }

    function myOtherFunction(a, b) {
       return a + b;
    }

    / / Code refactorisé

    const add = (a, b) => a + b;

    function myFunction(a, b) {
       return add(a, b);
    }

    function myOtherFunction(a, b) {
       return add(a, b);
    }
