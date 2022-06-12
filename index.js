// El funcionamiento filter consiste en filtrar uno o más elementos (un subconjunto) de una colección más grande de elementos (un superconjunto) basándose en alguna condición/preferencia.

// Caso de uso:Tenemos una lista donde se almacenan los nombres y función de los ingenieros encargados de desarrollar una aplicación. Con filter podremos filtrar los nombres únicamente de los encargados de la programación de la aplicación. 


let APP = [
    {
        nombre: "Juan",
          puesto: "programador"
     },
    {
        nombre: "Cecilia",
        puesto: "Documentacion"
    },
    {
        nombre: "Vale",
          puesto: "testing"
    },
    {
        nombre: "daniel",
          puesto: "diseño frontend"
     },
    {
        nombre: "Fly",
          puesto: "programador"
    },
    {
        nombre: "Julio",
          puesto: "documentacion"
    },
    {
        nombre: "Elian",
          puesto: "programador"
  },

]

let programador = APP.filter(miembro => miembro.puesto == "programador")

console.log(programador);

