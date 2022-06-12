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
