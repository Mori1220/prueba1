//Shift: El método shift extrae el primer elemento del vector y desplaza hacia delante el resto de elementos del vector 

//Caso de uso: Tenemos una lista de alumnos y se quiere eliminar el primer nombre de la variable alumnos.


var Alumnos = ['Karla', 'Emmanuel', 'Cecilia', 'Roberto'];

console.log('Alumnos antes: ' + Alumnos);

var eliminado = Alumnos.shift();

console.log('Alumnos después: ' + Alumnos);

console.log('Elemento eliminado: ' + eliminado);
