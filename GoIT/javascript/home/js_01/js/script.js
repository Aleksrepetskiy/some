
 var namber = +prompt("введите число", '');
 var power = +prompt("введите степень, в которую нужно возвести число", '');
 function pow (a, b) {
   var result = 1;
   for (var i = 0; i < b; i++) {
     result = result * a;
   }
   return result;
 }
   var powResult = pow (namber, power);
   console.log (powResult);


