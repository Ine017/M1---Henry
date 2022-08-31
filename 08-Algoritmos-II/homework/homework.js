'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
 if (array.length < 2) return array;  // <= 1

 let pivot = array[Math.floor(Math.random() * array.length)];
// let pivot = Math.floor(Math.random() * array.length)

 let left =[];      // let left =x , right = y, eq = z
 let right = []; 
 let equal =[];

 for (let i = 0; i < array.length; i++) {

  if(array[i] < pivot) {        //p trabajar si equal definir dónde van a estar los 
    left.push(array[i]);        // =; si en < o > q pivot (izq o der?)
  } else if (array[i] > pivot) {
    right.push(array[i]);
  } else {
    equal.push(array[i]);
  }
 }
 return quickSort(left).concat(equal).concat(quickSort(right));
}
  
   
  //Math.random() p elegir el pivote
  //Math.min()
  //concat() arr 3 = arr1.concat(arr2)



  
  /* Elige un elemento (índice) de forma aleatoria = pivote
     Ordena los elemetos < al pivote a su izq y los > a su der
     Una vez q terminó de trabajar con sus costados, trabaja con los 2 subarreglos:
     Se va con el de la izq y repite proceso; se va con el de la der y same
     Así hasta q no se pueda subdividir más 
     
     1) Busco pivote aleatoria/ (no necesaria/ la mitad, de hecho lo hacemos dif a propósito)
     2) Genero 2 subarreglos, der > e izq < (como estaban ordenados)
     3) Recursión en un subarreglo
     4) Repetir hasta que no pueda aplicar quicksort
     5) Devolver arreglo ordenado: concat de izq a der

      Voy generando subarreglos por cada parte de e izq, a c/u de ellos les voy aplicando
      quicksort y luego los voy a concatenar

                                       [2, 35, 7, 1, 96, 42, 19] 
                                            ^
               [2, 7, 1, 19]              [35]                 [96,42]
                   ^                                            ^
     [2, 1]       [7]      [19]                           [42] [96]  []
         ^                   |                              |
     [] [1] [2]         [] [19] []                    []  [42]  []
             |
        []  [2]  []
  
      ---------------------------    ----------------     ------------------
        [1,2]      [7]    [19]             [35]               [42, 96]

  Tengo la respuesta de todos, concateno (izq - eq - der): 
    --> [2] (va al quicksort anterior)
    --> [1, 2] ///
    --> [7] ///
    --> [19] ///
    --> [35] ///
    --> [42] 
    --> [96] 
    --> [42,96] /// 

    Terminaron los 3 qs? (o sea, llegó hasta arriba del todo resolviendo) CONCAT

    --> [1,2] [7] [19] [35] [42, 96] = [1, 2, 7, 19, 35, 42, 96]
                      */





function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Recursión. Ordena de atrás hacia adelante (no va ordenando como quick) 
  // Caso base: arreglo sólo tiene un elemento
  // Función que divida el arreglo; función que una el arreglo

  if(array.length === 1) return array;    // caso base; los arreglos son así: [2] [5] [1] [9]     [3] [8] [6] [9]   
                                          // compara y ordena; [2,5] [1,9]          [3,8] [6,9]
                                          // repeat:    [1,2,5,9]   [3, 6, 8, 9]
                                          // same. [1, 2, 3, 5, 6, 8, 9]
  let division = split(array);   // me retorna un arreglo con esos dos arreglos [[left], [right]]
  let left = division[0]; //[left]
  let right = division[1]; //[right]


  return paste(mergeSort(left), mergeSort(right));
  
}

//Función que divide el arreglo

function split(array){

let middle = Math.floor(array.length / 2);
let left = array.slice(0, middle);
let right = array.slice(middle);

return [left, right]; // [[left], [right]]
} 

//Función que una el arreglo. Cuando llego a esta parte, ya venían ordenados

function paste(left, right){  // [3, 7, 8]  [2, 4] --> [2, 3, 4]   [7, 8]
                              //  ^          ^          ^
                              //  ^             ^          ^
                              //     ^          ^             ^
                              // concat sobrantes -----------------> ^^^
let array = [];
let leftIndex = 0;
let rightIndex = 0;


while(leftIndex < left.length && rightIndex < right.length){
    
    if(left[leftIndex] < right[rightIndex]){
      array.push(left[leftIndex]);
      leftIndex++;  
  } else {
    array.push(right[rightIndex]);
    rightIndex++;
  }
  }
      return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
