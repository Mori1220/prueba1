//Concat: El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

//Caso de uso: Tenemos dos arrays con información diferente, y queremos unir estos dos arrays con la información almacenada para que el programa no regrese un solo array que tendrá dentro los dos anteriores. 

const arr1 = ['1Lidia', '2Pedro', '3David'];
const arr2 = ['300', '103', '45'];
const arr3 = arr1.concat(arr2);

console.log(arr3);
