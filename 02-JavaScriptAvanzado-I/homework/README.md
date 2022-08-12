
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;        // 10 8 8 9 10 1
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);  // 10
  console.log(a);  // 8
  var f = function(a, b, c) {
    b = a;  // 8
    console.log(b); // 8
    b = c; // 10
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9
}
c(8,9,10);
console.log(b); // 10 (contexto global)
console.log(x); // 1 (contexto global)
```

```javascript
console.log(bar); // 1
console.log(baz); 
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

// baz no está declarado entonces crashea el programa; no llega a ejecutar la función
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony
```

```javascript  
// DIF ENTRE VAR Y LET
var instructor = "Tony";
let pm = "Franco";
// block scope (no es un nuevo contexto; var se pisa!)
// Con let NO PASA, let RESPETA LOS BLOCKES
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";  //Este let, no pisa al de arriba (se borra)
    console.log(instructor); // The Flash
    console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
// EVALÚA DE DOS EN DOS!!! (CUANDO HAY 3 O +, X EJ LOS ULT DOS EJERCICIOS)
6 / "3"        // 2 
"2" * "3"      // 6
4 + 5 + "px"   // 9px
"$" + 4 + 5    // $45
"4" - 2        // 2
"4px" - 2      // NaN
7 / 0          // Infinity
{}[0]          // Undefined
parseInt("09") // 9
5 && 2         // 2  (si los dos son true da el segundo, si uno es false da el primero)
2 && 5         // 5
5 || 0         // 5 (si el primero es true me lo das, sino dame el otro)
0 || 5         // 5
[3]+[3]-[10]   // 23 (33 - 10; concatena por el +, luego dice ah, hay resta entonces son int, lo resta)
3>2>1          // false (3>2 = true! --> true>1? false!!!)
[] == ![]      // true (== evalúa sólo el valor y no el tipo; son valores booleanos!!)
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();  // 2
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);  // undefined 
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa (Llama al getter del obj, imprime el valor de fullname dentro de su entorno por el this, que es la propiedad prop)

var test = obj.prop.getFullname; 

console.log(test()); // undefined (se ejecuta en el contexto global --> busca ahí, no hay prop fullname --> x es el und)
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
//latentflip.com
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); // 1, 4, 3, 2 --> 1 Y 4 se imprimen 'en el momento', mientras que 2 y 3 se 'guardan para después'. Luego vuelve e imprime primero 3 pq el timeout es cero y luego 2 pq el to es 1 

// EN CONSOLA DICE QUE ES 1 4 undefined 3 2, ME FALTÓ EL UNDEFINED, CREO QUE TIENE Q VER CON ESA VUELTA QUE DA 
```
