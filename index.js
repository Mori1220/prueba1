//Hoisting: El hoisting es un nombre utilizado para referirse a cómo funcionan los contextos de ejecución en JavaScript para la creación y ejecución de funciones y variables.

//Caso de uso: En este caso podemos llamar a una función y definirla más abajo, porque automáticamente JS la “subirá”. Así, este código funciona correctamente.


function add() {
  var Num;
  Num = 2;
  console.log(Num + Num);
}
add();
