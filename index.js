
//El findIndex() método devuelve el índice del primer elemento de una matriz que pasar una prueba (en forma de una función).
//El findIndex() método ejecuta la función una vez para cada elemento presente en la matriz:
//Si encuentra un elemento de matriz, donde la función devuelve un valor verdadero, FindIndex () devuelve el índice de ese elemento de la matriz (y no comprueba los valores restantes)En otro caso devuelve indefinido

//Caso de uso: con findIndex se nos devolverá el índice del primer elemento de la matriz que en este caso sería un número primo o -1 si no hay un número primo.


function isPrime(numero) {
  for (let i = 2; numero > i; i++) {
    if (numero % i == 0) {
      return false;
    }
  }
  return numero > 1;
}

console.log([12, 4, 6, 8, 9].findIndex(isPrime)); 
console.log([12, 4, 7, 8, 9].findIndex(isPrime)); 


//Hoisting: El hoisting es un nombre utilizado para referirse a cómo funcionan los contextos de ejecución en JavaScript para la creación y ejecución de funciones y variables.

//Caso de uso: En este caso podemos llamar a una función y definirla más abajo, porque automáticamente JS la “subirá”. Así, este código funciona correctamente.


function add() {
  var Num;
  Num = 2;
  console.log(Num + Num);
}
add();


//Unshift: El método unshift() agrega uno o más elementos al inicio del array, y devuelve el nuevo número de datos guardados del array

//Caso de uso: tenemos un array con x cantidad de números guardados ahí y queremos implementarle x cantidad mas de números que ahora serán agregados al inicio del primer array junto con la nueva longitud del array.

const num = [552, 342, 663];

console.log(num.unshift(400, 556, 100));

console.log(num);



//Shift: El método shift extrae el primer elemento del vector y desplaza hacia delante el resto de elementos del vector 

//Caso de uso: Tenemos una lista de alumnos y se quiere eliminar el primer nombre de la variable alumnos.


var Alumnos = ['Karla', 'Emmanuel', 'Cecilia', 'Roberto'];

console.log('Alumnos antes: ' + Alumnos);

var eliminado = Alumnos.shift();

console.log('Alumnos después: ' + Alumnos);

console.log('Elemento eliminado: ' + eliminado);

//Replace: Replace nos sirve para remplazar caracteres dentro de una cadena de texto. 
//El método replace busca una cadena o un valor especificado y devuelve una cadena con los valores especificados reemplazados.

//Caso de uso: Tenemos una variable con un nombre guardado y queremos reemplazar el primer nombre por otro nombre pero el mismo apellido.

var nombre = "Mori Yllescas"
var arr = "Mori"; 
var nuevoNombre = "Karla";

var newName = nombre.replace(arr, nuevoNombre);

console.log(newName); 



//El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

//caso de uso: en este caso se quiere hacer la suma de todos los números ingresados por el programador. Ingresando cada valor y nuestra función reduce nos regresará un único valor.

function suma(a, b) {
    return a + b;
  }
  
  const numeros = [10, 20, 30, 40,];
  
  const result = numeros.reduce(suma);
  
  console.log(result); 
  


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







