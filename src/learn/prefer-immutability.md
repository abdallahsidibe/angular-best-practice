# l'immuabilité
En Angular, l'immuabilité est la propriété d'un objet ou d'un tableau qui ne peut pas être modifié après sa création. 

Cela signifie que les propriétés d'un objet immuable ne peuvent pas être modifiées, et que les éléments d'un tableau immuable ne peuvent pas être ajoutés, supprimés ou modifiés.

L'immuabilité est importante en Angular pour plusieurs raisons :


Elle permet d'améliorer les performances de l'application. 

En effet, Angular n'a pas besoin de recalculer le rendu de l'application si un objet immuable est modifié.
Elle facilite la maintenance de l'application. 

En effet, les objets immuables sont plus faciles à comprendre et à tester que les objets mutables.
Elle réduit le risque de bogues. 

En effet, les objets immuables ne peuvent pas être modifiés accidentellement, ce qui peut entraîner des bogues.

Il existe plusieurs façons de créer des objets et des tableaux immuables en Angular. Une façon consiste à utiliser des types immuables, tels que les types readonly ou const. Par exemple, le code suivant crée un objet immuable :

-----------------------------------------------

    const user = {
      name: "John Doe",
       age: 30,
    };
-----------------------------------------------
    const numbers = [1, 2, 3];
    const immutableNumbers = [...numbers];
-----------------------------------------------

Voici quelques exemples d'utilisation de l'immuabilité en Angular :

Pour transmettre des données à un composant, vous pouvez utiliser des objets immuables. 
Cela garantira que les données ne seront pas modifiées par le composant.

Pour créer des modèles de données, vous pouvez utiliser des objets immuables. 
Cela facilitera la maintenance des modèles de données et réduira le risque de bogues.

Pour créer des états d'application, vous pouvez utiliser des tableaux immuables. 
Cela garantira que les états de l'application ne seront pas modifiés accidentellement.

L'immuabilité est une pratique de programmation importante qui peut être utilisée pour améliorer les performances, la maintenabilité et la fiabilité de vos applications Angular.

## l'opérateur de spread (...) pour créer une nouvelle copie de l'objet

    this.currentUser = { ...this.currentUser, classes:this.currentUser.classes.concat(classId) }

Cette ligne de code met à jour la propriété classes de l'objet currentUser en ajoutant l'identifiant de classe classId à la fin du tableau classes. 

Elle utilise l'opérateur de spread (...) pour créer une nouvelle copie de l'objet currentUser, puis ajoute la nouvelle propriété classes à la copie. 

La méthode concat() est utilisée pour créer un nouveau tableau qui contient toutes les valeurs du tableau classes d'origine, plus l'identifiant de classe classId.

Voici une explication plus détaillée du code :

this.currentUser fait référence à l'objet utilisateur actuel.
{ ...this.currentUser } crée une nouvelle copie de l'objet currentUser. 

L'opérateur de spread permet de décomposer l'objet currentUser en ses propriétés individuelles, puis de les regrouper dans un nouvel objet.

{ ...this.currentUser, classes:this.currentUser.classes.concat(classId) } ajoute une nouvelle propriété classes à la copie de l'objet currentUser. 

La valeur de la propriété classes est un nouveau tableau créé en concaténant le tableau classes d'origine avec l'identifiant de classe classId. 

La méthode concat() crée un nouveau tableau sans modifier le tableau d'origine.

-----------------------------------------------
      const obj = { name: "John Doe", age: 30 };
      const { name, age } = obj;

      console.log(name); // "John Doe"
      console.log(age); // 30
-----------------------------------------------
      const arr = [1, 2, 3];
      const newArr = [...arr, 4, 5];

      console.log(newArr); // [1, 2, 3, 4, 5]
-----------------------------------------------
      const obj = { name: "John Doe", age: 30 };
      const newObj = { ...obj };

      console.log(newObj); // { name: "John Doe", age: 30 }
 -----------------------------------------------
      const arr = [1, 2, 3];
      arr.push(...[4, 5]);

      console.log(arr); // [1, 2, 3, 4, 5]
-----------------------------------------------

    const obj = {
       ...{ name: "John Doe" },
       age: 30,
    };

    console.log(obj); // { name: "John Doe", age: 30 }
-----------------------------------------------




