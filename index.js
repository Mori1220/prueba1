
//Caso de uso en cadena: Lo que hacemos es leer texto.txt. Si ocurre un error, la promesa se rechaza y mostramos el error con console.error. Si lo lee, ejecutamos su lectura en el primer .then y corremos un nuevo readFile. Las Promesas en JavaScript son acciones que se resolverán a futuro (cuando se pueda) y que sabremos si se llevaron a cabo con éxito o no

readFile('./texto.txt')
                .then(readFile)
                .then(data => console.log(data))
                .catch(error => console.error(error));


//Promesas: Las promesas se crean usando un constructor llamado Promise y pasándole una función que recibe dos parámetros, resolve y reject , que nos permiten indicarle a esta que se resolvió o se rechazó.

//Caso de uso: En este caso se creó una promesa que se completará en 2 segundos. Si el número aleatorio que hemos generado es mayor a 4 se resolverá, en caso contrario se rechaza y se muestra un error.

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 12);
  setTimeout(
                 () => number > 4
                                 ? resolve(number)
                                 : reject(new Error('Menor a 4')),
                 2000
  );
});

promise
  .then(number => console.log(number))
  .catch(error => console.error(error));

//Map es una función que te permite transformar los elementos de una lista y que devuelve una nueva lista con los elementos transformados

//caso de uso: tenemos un array con primer nombre y segundo nombre de nuestros amigos, utilizamos el metodo map para realizar un arreglo y unir los valores almacenados en firts name y last name.


let people = [
    {firstName : "Karla", lastName: "Rodriguez"},
    {firstName : "Daniel", lastName: "Diaz"},
    {firstName : "Carlos", lastName: "Rodriguez"}
  ];
  
  let peopleFullnames = people.map(function(element){
      return `${element.firstName} ${element.lastName}`;
  })
  
  console.log(peopleFullnames);



