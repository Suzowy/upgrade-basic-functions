"use strict";


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

//Iteración #5: Calcular promedio de strings
//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "string") {
        sum += array[i].length;
      }
    }
    return console.log(sum / array.length);
  }
  
  averageWord(mixedElements);

  //Iteración #6: Valores únicos
  //Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

  const duplicates = [
  'sushi','pizza', 'burger','potatoe','pasta','ice-cream', 'pizza','chicken','onion rings','pasta','soda'
  ];
  function removeDuplicates(array) {
      let unique = [];
      for (let i = 0; i < array.length; i++) {
        if (!unique.includes(array[i])) {
          unique.push(array[i]);
        }
      }
      return console.log(unique);
    }
    
    removeDuplicates(duplicates);

    //Iteración #7: Buscador de nombres
    //Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
    const nameFinder = ['Peter','Steve','Tony','Natasha','Clint', 'Logan', 'Xabier', 'Bruce','Peggy','Jessica','Marc'
    ];
    function finderName(param, valor) {
    
     for (let i= 0; i< param.length; i++)
     if (param[i] === valor) {
      return console.log(true, i)
     }
     return console.log(false);
    }
    finderName(nameFinder, "Xabier");
    finderName(nameFinder, "Paco");
    