// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada. 

//caso de uso: En este caso queremos encontrar la información de las pcs en un array mediante una de sus propiedades alojadas.  


const inventario = [
    {nombre: 'pcs', numpiezas: 22},
    {nombre: 'cable para router', numpiezas: 10},
    {nombre: 'router', numpiezas: 25}
];

function espcs(equipo) {
    return equipo.nombre === 'pcs';
}

console.log(inventario.find(espcs));
