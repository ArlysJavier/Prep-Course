// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var arka = {
    nombre: nombre,
    edad: edad,
     meow: function (){
      console.log ('Meow')
     }
  }
    console.log (arka, arka.meow ())
}

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  var objeto1 = objeto;
  objeto1 = {
    propiedad: property,
  }
  console.log (objeto1)
}


function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto={
    medtodo: function (){
      return;
    }
  }
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  objetoMisterioso={
    numeroMisterioso: objetoMisterioso,
  }
console.log(objetoMisterioso.numeroMisterioso *5)
}



function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  objeto={
    nombre: 'arlys',
    casado: false,
    edad: 28,
    ciudad: 'medellin',
    pais: 'colombia',
  }
  delete objeto[unaPropiedad]
  console.log(objeto)
}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  usuario1={
    Nombre: nombre,
    Email: email,
    Password: password,
  }
console.log (usuario1)
}


function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  usuario={
    Nombre: 'Casemiro',
    Email: 'arjavia09@gmail.com',
    Password: 'jeuib75467',
  }
  if (usuario.Email != ''){
    return true
  } else {
    return false
  }
}

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  let chect;
  objeto={
    Nombre: 'Casemiro',
    Email: 'arjavia09@gmail.com',
    key:propiedad,
    Password: 'jeuib75467',
    
  }
    console.log (objeto)
  for (chect in objeto){
    if (chect === 'key'){
      return true
          }   
}
return false
}


function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  usuario={
    password: '12345678'

  }
  if (usuario.password===password){
    return true
  } else {
    return false
  }
}

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  usuario ={
  password:'12345678',
  }
  usuario['password']= nuevaPassword;
  console.log (usuario)
}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  usuario = {
  amigos: ['karla', 'sandra', 'laura']
 }
 usuario['amigos'].push(nuevoAmigo)
 console.log(usuario['amigos'])
}



function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  usuarios=[
  Arlys={esPremium: true,},
  karla={esPremium: true,},
  Santy={esPremium: true,},
  Luna={esPremium: true,}];
  for (var i=0;i<=usuarios.length ; i++){
    console.log(usuarios[i])
  }
  




function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  usuario={
    posts: [
      post={ likes: 10,},
      post={ likes: 11,}
    ]
  }
  console.log (usuario.posts[0]['likes']+usuario.posts[1]['likes'])
}

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
