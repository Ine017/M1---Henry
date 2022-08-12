'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

    
    var result = 0;
    
    for (var i = 0; i < num.length; i++) {

      result += num[i]*2** (num.length - 1 - i);   
     } 
 
     return result; 
  
    }

function DecimalABinario(num) {
  // tu codigo aca
   
  var result = '';

  while (num > 0) {
  
    result = num % 2 + result;
  
    num = Math.floor(num/2); 
  } 
     return result;
   
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
