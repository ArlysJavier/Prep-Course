// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
 function Usuario(usuario,nombre,email,password){
  this.opciones = {
    usuario: usuario ,
    nombre: nombre,
    email: email, 
    password: password,
  }
  this.saludar = function(){
    return 'hola mi nombre es' + nombre;
  }
 }
 let Arlys= new Usuario('arjavia','Alys','arjavia07@gmail.com', 'mecani12' );
 console.log (Arlys.saludar()) 
 }




  function agregarMetodoPrototype(Constructor) {
    // Agrega un método al Constructor del `prototype`
    // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
    // Tu código:
  function Metodo (mensaje){
    this.mensaje = mensaje;
    }
    Metodo.prototype.saludar = function (){
      return this.mensaje
    }

    let texto = new Metodo('Hello World')
    console.log (texto.saludar())
  }

  
  

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  function Reversar(str){
    this.cadena = str;
  }
    Reversar.prototype.reverse = function(){
      let X =  this.cadena.split('');
      return X.reverse().join('')
    }
  let respuesta = new Reversar('abcde')
  console.log (respuesta.reverse());
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }


    ﻿
    class Persona {
      constructor(nombre,apellido,edad,domicilio) {
        // Crea el constructor:
         this.nombre = nombre;
         this.apellido = apellido;
         this.edad= edad;
         this.domicilio= domicilio;
        }
     detalle() {
        Object = {
          Nombre : this.nombre,
          Apellido : this.apellido,
          Edad: this.edad,
          Domicilio: this.domicilio,
        }
        return Object;
      }
    }
    let Arlys = new Persona('Arlys','Asprilla','22','bombona');
    console.log (Arlys.detalle())
  
  function crearInstanciaPersona(nombre, apellido, edad, dir) {
    //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
    //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
    //Devolver la nueva persona creada
  
  }
  class PersonaX extends Persona {
  }
  let Juan = new PersonaX('juan','Perez',22,'Savedra 123')
  console.log (Juan.detalle())

  

function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  class nombred extends Persona {
  }
  let pedro = new nombred('pedro','Perez',22,'Savedra 123')
 console.log (pedro.nombre, pedro.edad)
}



  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
