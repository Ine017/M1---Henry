"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

/* El BSTree es ~= Binary tree PERO los valores > al nodo van a la der y los < a la izq
 (si fuera el mismo valor, decido yo, pero la idea es no almacenar núm repetidos)
 Siempre empiezo desde la raíz: cada vez q tenga q insertar un nodo me fijo si es > o <.
 Ej: 2, luego 5-->     2     --> ahora entra el 3:        2
                     /   \                              /   \         EN LOS BST SI IMPORTA
                   null   5                           null   5        DÓNDE PONGO LOS
                                                           /   \      VALORES !!! A !=
                                                          3    null   DE LOS BT

*/
function BinarySearchTree(value) {

    this.value = value;
    this.left = null;
    this.right = null;  
}

let tree = new BinarySearchTree();


BinarySearchTree.prototype.size = function(){

  if(this.value === null) return 0; //no hay nodo
  if(this.left === null && this.right === null) return 1; //no tiene nodos a sus costados
  if(this.left === null && this.right !== null) return 1 + this.right.size();
  if(this.left !== null && this.right === null) return 1 + this.left.size();
  if(this.left !== null && this.right !== null) return 1 + this.left.size() + this.right.size();

  
  //retorna la cant total de nodos en el árbol (cuenta)
};

BinarySearchTree.prototype.insert = function(value){

  if (value > this.value) {
    if (this.right === null) {  //Si es > y la rama der NO está libre, pasa a la de abajo
      this.right = new BinarySearchTree(value); //Si está libre, ponelo ahí :D
    } else {
      this.right.insert(value);
    }
  }  
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
    
  }
  };
  
  //agrega un nodo en el lugar correspondiente

BinarySearchTree.prototype.contains = function(value){
  
  if(this.value === null) return false;
  else if ( this.value === value) { 
    return true;
  } 
  if( this.value > value && this.left !== null) {
     
    return this.left.contains(value);
    
  }
  if( this.value < value && this.right !== null) {
    
    return this.right.contains(value);
  } else return false;
 /* let current = this.value;
  while(current) {
    if(this.value === value) {
      return true;
    }
    if(this.value > value) { 
      current = current.left;
    } else {
      current = current.right;
    }
  } return false;*/
/*  if(value === this.value) return true;
  else if(value > this.value && this.right !== null) {
    this.right.contains(value);
    return true;
  } 
  else if (value < this.value && this.left !== null) {
    this.left.contains(value);
    return true;
  }
    return false; */
   
    //tree.contains(value) 
    //retorna t o f luego de evaluar si value existe en el árbol 
  };

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){

    //post-order(izq - der - root)
    if (order === 'post-order') {
                
      if(this.left !== null) {
          this.left.depthFirstForEach(cb, order)};
      if(this.right !== null){
          this.right.depthFirstForEach(cb, order);}
      cb(this.value);
      
  }
      //pre-order (root - izq -der)
 else if (order === 'pre-order') {
  
      cb(this.value);
      if(this.left !== null) {
          this.left.depthFirstForEach(cb, order)};
      if(this.right !== null){
          this.right.depthFirstForEach(cb, order);}

  }
      //in-order (izq - root - der)
  else {
      if(this.left !== null) {
          this.left.depthFirstForEach(cb, order)};
      cb(this.value);
      if(this.right !== null){
          this.right.depthFirstForEach(cb, order);};

  }
  /*
  recorre el árbol siguiendo el orden depth first en cualquiera de sus variantes, según se
  //indique x parám ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parám, 
  hará el recorrido "in-order" por defecto.
  
  PRE-ORDER: (root - izq -der)
  IN-ORDER: (izq - root - der)
  POST-ORDER (izq - der - root)

 */
};
BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue){

  if(!queue) queue = [];
  //guardar lo que hay en la izq
  if(this.left !== null) {
    queue.push(this.left);
  } 
  //guardar lo que hay en la der
  if(this.right !== null) {
    queue.push(this.right);
  } 
  //ejecutar root
  cb(this.value);

  if(queue.length > 0 ) {
    queue.shift().breadthFirstForEach(cb, queue);
  }
  
  //recorre el árbol siguiendo el orden breadth first (BFS)
  //BFS: por niveles y de izq a der
};


/* ÁRBOL BINARIO AUTOBALANCEADO (AVL TREE): cuando hablamos de un árbol balanceado es pq 
decimos q la altura del sub-árbol izq difiere como máximo en 1 de la altura del sub-árbol
derecho. La altura se calcula teniendo en cuenta los niveles: root = nivel 0

Las respuestas q puedo tener son -1, 0 o 1 para q esté balanceado:

                     root -->       A               Level 0 
                                 /     \   
                                B       C           Level 1
                              /   \    /  \
                             D     E  F    G        Level 2
                            / \   /
                           H   I J                  Level 3

--> Me paro en D (Level 2) y me fijo la altura de las ramas (ambas llegan hasta Lvl 3):
    Cuánto tengo de diferencia? rama izq (H) = 1; rama der (I) = 1; 
    1 - 1 = 0 --> balanceado!!
--> Me paro en E, tengo 1 - 0 = 1 --> balanceado!!

Tengo q checkear p c/sub árbol

MAX HEAP: los padres siempre tienen q ser > q sus hijos
Existen tmb los MIN HEAP.

*/


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
