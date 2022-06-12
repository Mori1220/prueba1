//Caso de uso en cadena: Lo que hacemos es leer texto.txt. Si ocurre un error, la promesa se rechaza y mostramos el error con console.error. Si lo lee, ejecutamos su lectura en el primer .then y corremos un nuevo readFile. Las Promesas en JavaScript son acciones que se resolverán a futuro (cuando se pueda) y que sabremos si se llevaron a cabo con éxito o no

readFile('./texto.txt')
                .then(readFile)
                .then(data => console.log(data))
                .catch(error => console.error(error));
