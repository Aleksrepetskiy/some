
 var namber = prompt("введите число", '');
 var math = prompt("введите степень, в которую нужно возвести число","");

 if (math <= 1) {
   alert('Степень ' + math +
     'не поддерживается, введите целое число, больше 1'
   );
 } else {
   console.log (pow (namber, math));
 }

 function pow(namber, math) {
   var result = namber;

   for (var i = 1; i < math; i++) {
     result = result * namber;
   }

   return result;
 }


