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

