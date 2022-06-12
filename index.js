//For of: La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array, objetos similares al array, permite que dentro de la ejecución del bucle tengamos acceso al elemento que estemos tratando. 
//Caso de uso: Tenemos un array con diferentes valores y queremos modificar estos valores, sumándoles 33, por lo cual en este caso le implementaremos un for permitiendo tener acceso a este array y modificarlo con el valor de value.  

let num = [200, 300, 250];

for (let value of num) {
  value += 33;
  console.log(value); 
}
