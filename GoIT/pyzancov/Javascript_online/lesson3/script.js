//
// do {
//   var askNumber = prompt ('Введите число больше 100', '');
// } while ( askNumber <= 100 && askNumber !== null);

//****//

// nextPrime:
//     for (var i = 2; i < 100; i++) {
//         for (var j = 2; j < i; j++) {
//             if (i % j === 0) continue nextPrime;
//         }
//         console.log(i);
//     }

//****//

// for (var i = 0; i < 100; i++) {
//   if (i%3===0) {
//     console.log('Fizz');
//   }else if (i%5===0) {
//     console.log('Buzz');
//   }else{
//     console.log(i);
//   }
// }

//****//

// for (var i = 0; i < 100; i++) {
//   if (i%5===0 && i%3===0) {
//     console.log('FizzBuzz');
//   }else if (i%5===0) {
//     console.log('Buzz');
//   }else if (i%3===0) {
//     console.log('Fizz');
//   }else{
//     console.log(i);
//   }
// }

//****//
// var a = 4, b = 16, str;
//
// for (var i = 0; i < a; i++) {
//   str='';
//   for (var j = 0; j < b; j++) {
//     str+=(i%2 === j%2)?'#':' ';
//   }
//   console.log (str);
// }

//****//

function pow(x,n) {
  var result=1;
  for (var i = 0; i < n; i++) {
    result = result*x;
  }
 return (console.log(result));
}
pow(1,100);
