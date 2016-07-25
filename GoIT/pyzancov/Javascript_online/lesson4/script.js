// Задание 1 (Последовательность Фибоначчи)
// function fib(n) {
//  if (n<=1) {
//   return n;
//  } else {
//    return (fib(n-1) + fib(n-2));
//  }
// }
//
// console.log(fib(7));

// function fib(n) {
//     var result = 1,result1 = 1, a;
//     if (n <= 2) {
//         return 1;
//     }
//     for (var i = 3; i <= n; i++) {
//         a = result;
//         result = result + result1;
//         result1 = a;
//     }
//     return result;
// }
// console.log(fib(7));



// Задание 2 (Проверка на СПАМ)

// function checkSpam(str) {
//     str = str.toLowerCase();
//     return (str.indexOf('spam') !== -1 || str.indexOf('sex') !== -1);
// }
//
//  console.log(checkSpam('get new Sex videos')); // true
// console.log(checkSpam('[SPAM] How to earn fast money?')); // true
// console.log(checkSpam('New PSD template')); // false

 // Задание 3 (Троеточие)

// function CheckName(str) {
//     if(str.length>20) {
//         str=str.slice(0, 20)+'...';
//     }
//     console.log(str);
// }
// CheckName('lorem llklklklk');
