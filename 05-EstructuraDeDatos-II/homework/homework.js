"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {

  this.head = null;

}

function Node(value) {
  
  this.value = value;
  this.next = null;
}


let newList = new LinkedList();

LinkedList.prototype.add = function(value) {

  let node = new Node(value);  
  let current = this.head;

  if(!current) { 

    this.head = node;
    return node;
   }

  while (current.next) {

    current = current.next;

  }
  current.next = node;
}

LinkedList.prototype.remove = function(){

  if (this.head === null) return null;
  if (this.head && !this.head.next) {
    let removedNode = this.head;
    this.head = null;

    return removedNode.value;    
  }
  let current = this.head;
  while (current.next.next) {

    current = current.next;
  }
    let removedNode = current.next;
    current.next = null;
      return removedNode.value;

};

LinkedList.prototype.search = function(value){

  if(this.head === null) return null; 
  let current = this.head; 
  
  while (current) {
    if (current.value === value) return current.value;
    else if (typeof value == 'function' ){
         
          if (value(current.value)) {return current.value;}                
               
        }
        
        current = current.next;

        }   return null;


};






// if (!current) { }
//if (current) {}
// while() {}
//

// function add (){ agrega un nodo al final de la lista}
// function remove (){ elimina el último nodo de la lista y retorna su valor
// tener en cuenta casos partic de lista de un sólo nodo y lista vacía}
// function search (param) { busca el parám dentro de la lista; éste puede ser value -busca un un nodo cuyo valor coincida con lo buscado-
// o cb - buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true-} 
// Si no hay resultado, search return null


/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

class HashTable {
  constructor(){
    this.numBuckets = 35;
    this.buckets = [];
  }
  hash(key){
    let sum = 0;
   for (let i = 0; i < key.length; i++) {
     sum += key.charCodeAt(i) 
  }  return sum % this.numBuckets;
  };

  set(key, value){
    if( typeof key !== 'string') throw TypeError('Keys must be strings'); 
    let i = this.hash(key);
    //Para asegurar que no hayan colisiones, puedo crear objetos (arrays, listas) dentro del array buckets
    if(this.buckets[i] === undefined) { //this.buckets = []; i = 3;
      this.buckets[i] = {};              //this.buckets[3] = [,,,] --> nada en la posic 3, crea obj! --> this.buckets[3] = [,,,{}]
    }
    this.buckets[i][key] = value;        //en ese obj q creaste, guarda key:value --> this.buckets[3] = [,,,{key: value}]
  };
 
  get(key){          // voy a obtener un valor, llega x parám el key
    let i = this.hash(key);  //dónde voy a buscar el valor? 
    return this.buckets[i][key]; //devolve el valor que está ahí y corresp a esa key
  };                            //ej: i = 3, key = hola, value = hello --> this.buckets[3][hola] --> returns hello
 
  hasKey(key){
    let i = this.hash(key); //va a la posición que le indico y chequea si es true or false q tenga la prop
    return this.buckets[i].hasOwnProperty(key);

  };
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
