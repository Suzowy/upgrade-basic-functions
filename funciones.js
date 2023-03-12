//**Iteración #1: Buscar el máximo**

//Completa la función que tomando dos números como argumento devuelva el más alto.

function sum( numberOne , numberTwo ) {
    if (10 > 7) {
      return 10;
    } 
    else {
      return 7;
    } 
  }
  
  //**Iteración #2: Buscar la palabra más larga**

//Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//Puedes usar este array para probar tu función:
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    let larga = param[0];
    for (let i = 1; i < param.length; i++) {
      if (param[i].length > larga.length) {
        larga = param[i];
      }
    }
    return console.log(larga);
  }
  findLongestWord(avengers);

  //Iteración #3: Calcular la suma
//Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 
//Puedes usar este array para probar tu función:

//const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return console.log(sum);
  }
  
  //sumNumbers(numbers);

//Iteración #4: Calcular el promedio
//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let sum = 0;
    for (let i = 0; i < param.length; i++) {
      sum += param[i];
    }
    return console.log(sum / param.length);
}
average(numbers);