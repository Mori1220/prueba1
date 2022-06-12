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
