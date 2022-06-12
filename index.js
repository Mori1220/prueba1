//El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

//caso de uso: en este caso se quiere hacer la suma de todos los números ingresados por el programador. Ingresando cada valor y nuestra función reduce nos regresará un único valor.

function suma(a, b) {
    return a + b;
  }
  
  const numeros = [10, 20, 30, 40,];
  
  const result = numeros.reduce(suma);
  
  console.log(result); 
