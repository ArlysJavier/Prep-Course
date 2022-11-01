// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var lista =['Amor', 3, 5.6, 5];
  console.log (lista[0]) //puedo cambiar el cero por la variable array e ingrasar el numero de a funcion cuando la invoque 
  
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var array = ['Arlys', 'Karla',4,5,6,undefined]
  var M = array.length -1;
  console.log (array[M]);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var array = [3,4,5,6,7,89,0,8,7]
  array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var array = [2,4,6,7,8]
  for (x=0; x<array.length;x++){
 console.log (array[x]+1);
  }
    

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array=['arlys',5.6,4,3]
  array.push (elemento);
  console.log (array)
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array=['Karla', 'Javier','Laura']
  array.unshift(elemento)
  console.log(array)
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
palabras=['hola', 'mundo']
console.log(palabras[0],palabras[1])
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let x=0; x<array.length; x++ ){
    if (array[x]=== elemento){
      return true;
    } 
    }
    console.log(false)
  }


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  for (let x=0; x<numeros.length; x++ ){
    suma += numeros[x]
      }
      console.log (suma)
 }


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  const recorreArray = (arr) => {
    for(let i=0; i<=arr.length-1; i++){
    console.log(arr[i]);
    }
  }
  recorreArray(resultadosTest)
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  console.log (Math.max(...numeros))
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var mult= 1;
  for(a=0; a< arguments.length; a++){
    mult = mult*arguments[a]  
  }
  if (arguments.length === 0){
    console.log (0)
      }
     else if (arguments.length > 1){
      console.log(mult)
          }
          else if (arguments.length = 1){
            console.log (arguments[0])
          }
          
}



function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
 var resultado=0;
 for (let i = 0; i<arguments.length; i++){
  if (arguments[i]>18){
    resultado++;
  }
 }
 console.log (resultado)
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  if (numeroDeDia>=1 || numeroDeDia<=2){
    return 'Es Fin de semana'
  }  else if (numeroDeDia>=3 || numeroDeDia<=7){
    return 'Es Dia Laboral'
  } else {
    return "";
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
var  str=n.toString();
  for (s=0;s<str.length;s++){
if (str[0]=='9'){
  return true
} else{
  return false 
}

}
}



function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  í  
    var a=0;
    for (var s=0; s<arreglo.length; s++){
  if (arreglo[0]===arreglo[2]){
    a++;
  }
  
  }
  if (a===arreglo.length){
      console.log(true)
      
      } else {
      console.log (false)
  }
}
  


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  for (i=0;i<array.length;i++){
    if (array[i]==='enero'){
      var A=array[i]
       } else if (array[i]==='marzo'){
        var B=array[i]
       } else if (array[i]==='noviembre'){
        var C=array[i]
       }
  }
    if (A==='enero'&& B==='marzo'&& C==='noviembre'){
      var R=[A,B,C]
      console.log(R); 
    } else{
      return 'No se encontraron los meses pedidos'
    }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var Nuevo=[]; 
  for (i=0;i<array.length;i++){
    if (array[i]>=100 && array[i]<=200){
      var X1 = (array[i])
      }
console.log(Nuevo[X1])
  }
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var c1=0;
  var incremnto=0;
  var array = [];
  for(x=0; x<=9;x++){
    c1 = c1+2
    incremnto = numero + c1;
    array.push(incremnto)
    if (x===incremnto){
      console.log('se interrumpio la ejecucion')
      break;
    }
  }
  console.log(array)
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var c1=0;
  var incremnto=0;
  var XX=0;
  var array = [];
  for(x=0; x<=9;x++){
    if(x!=5){
    c1 = c1+2
    incremnto = numero + c1;
    array.push(incremnto)
    } else{
      continue;
    }
  }
  console.log(array)
 
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
