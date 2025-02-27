// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var nombre2 = nombre.charAt(0).toUpperCase() + nombre.slice(1);
  return nombre2
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  function llamar(usuario, cb){
    return cb(usuario)
  }
  return llamar('karla', mayuscula)
}


function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
function operacion(y1,y2, cb){
    return cb(y1,y2)
}
return operacion(n1,n2,cb)
}
function mult(x , x1){
  return x*x1;
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  numeros=[2,3,4,5,5]
  var suma = numeros.reduce(function(A,B){
    return A+B;
  },0)
}



function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
 array.forEach(function(X,Y){
  console.log (X);
 })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoarray = [2,3,4,5]
  var arraycb = nuevoarray.map(function(elem){
    return elem+3;
  })
  console.log(arraycb)
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
    var d=[];
  for(i=0; i<array.length;i++){
    if (array[i][0]==='a'){
      d.push(array[i])
    }
  }
  console.log(d)
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
