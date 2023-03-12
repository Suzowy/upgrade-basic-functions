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