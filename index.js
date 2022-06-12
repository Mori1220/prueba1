//Replace: Replace nos sirve para remplazar caracteres dentro de una cadena de texto. 
//El método replace busca una cadena o un valor especificado y devuelve una cadena con los valores especificados reemplazados.

//Caso de uso: Tenemos una variable con un nombre guardado y queremos reemplazar el primer nombre por otro nombre pero el mismo apellido.

var nombre = "Mori Yllescas"
var arr = "Mori"; 
var nuevoNombre = "Karla";

var newName = nombre.replace(arr, nuevoNombre);

console.log(newName); 
