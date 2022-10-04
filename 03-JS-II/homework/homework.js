// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x>y){
    console.log(x)
  } 
  else if (x<y){
    console.log(y)
  }
  else if (x===y){
    return x;
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if(edad >=18){
    console.log ('Allowed')
  } 
  else {
    console.log ('Not allowed')
  }
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status === 1){
    console.log('online')
  } else if (status===2){
    console.log('Away')
  } else {
    console.log('offline')
  }
}


function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma==='aleman'){
    console.log ('Guten Tag')
      }  
    else if (idioma==='mandarin') {
        console.log ('Ni Hao')
      } 
    else if (idioma==='ingles') {
        console.log ('Hello')
      } 
    else {
        return 'Hola'
         }

}
function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  if (color==='blue'){
    console.log ('This is blue')
  }
  else if (color==='red'){
    console.log ('This is red')
  }
  else if (color==='green'){
    console.log ('This is green')
  }
  else if (color==='orange'){
    console.log ('This is orange')
  } else {
    console.log('color not found')
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero===10 || numero===5){
    return true;
  } else {
    return false;
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero >20 ){
    return true;
  } else{
    return false;
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (Number.isInteger(numero)) {
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var x = numero % 3;
  var x1 = numero % 5;
  if (x===0 && x1 ==0){
    console.log ('fizzbuzz')
  } else if(x1===0){
    console.log ('buzz')
  } else if(x===0){
    console.log ('fizz')
  } else {
    return numero;
  }
}

   
  


function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if (num1 > num2 && num1 > num3 &&  num1>0){
    console.log ('Número 1 es mayor y positivo')
  } else if (num1 < 0 || num2 < 0 ||  num3 <0 ){
    console.log ('Hay negativos')
  }else if (num3>num1 && num3>num2){
    num3++;
    return num3;
  } else if (num3 === 0 || num1===0 || num2 == 0){
    return error;
  }else {
    return false;
  }
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  for ( let x = 2; x<numero; x++){
    var M = numero%x;
    console.log(numero,'%',x,'=',M)
      if (M === 0){
          console.log(false)
      }
      else {
          console.log(true)
      }
  }
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
if (valor === true){
  console.log ('Soy verdadero');
   }
    else if (valor=== false) {
  console.log ('Soy falso');
    }
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  for (var a=0; a<=60; a++){
      var resultado = a*6;
      console.log (a,'x 6 =',resultado) 
  }
}


function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if (numero >= 100 && numero <=999){
    console.log (true);
  }else {
      return false;
  }
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
