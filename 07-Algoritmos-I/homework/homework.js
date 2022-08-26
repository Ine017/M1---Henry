'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {

  let factores = [1]; //siempre va a fatorear x 1
  let val = 2;
    
   while (num > 1) {

      if(num % val === 0) {
        factores.push(val);    //pusheo el valor
        num = num/val; 
      }
      else {
        val++;
      }

      
 }  return factores; 

    
  // --> REVISAR ANOTACIONES <--
  
  //necesito q todos los factor sean primos y vayan de menor a mayor
  // el primer factor es 1, el segundo es 2
  
  //num % i === 0 --> si el resto es cero, el numero no es un primo (x ej 8%2 = 4 (0))   

    //numeros primos num % 1 === 0 --> false
    // num % 1 !== 0 true?
    // agarra un num y lo divide x el primo mas chico q hay p q le de un entero y recursión hasta num = 1
  }
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (var i = 0; i < array.length; i++){
    for (var j = 0; j < (array.length - i - 1); j++){

      if(array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  } return array;
}


function insertionSort(array) {

  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let temp = array[i];
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j]
      j--
    }
    array[j+1] = temp;
  }
  return array;
  
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


function selectionSort(array) {

  let n = array.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(array[j] < array[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = array[i]; 
             array[i] = array[min];
             array[min] = tmp;      
        }
    }
    return array; 
    
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
