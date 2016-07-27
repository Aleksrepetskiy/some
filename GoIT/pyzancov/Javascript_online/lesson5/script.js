// Задание 1 (Кто первым решил больше всех задач)

// var tasksCompleted = {
//   'Anna': 29,
//   'Serg': 3525,
//   'Elena': 1,
//   'Anton': 1999,
//   'Sasha': 199
// };
// function winner (obj) {
//   var win = 0, name;
//     for (var variable in obj) {
//       if (win<obj[variable]) {
//         win = obj[variable];
//         name = variable;
//       }
//     }
//   console.log(name +":"+ win);
// }
// winner (tasksCompleted);


// Задание 2 (Изменение численных свойств)

// var image = {
// width: 100,
// height: 400,
// title: 'Cool image'
// };
//
// function multiplyNumeric (obj) {
//     for (var variable in obj) {
//         if (typeof obj[variable] == 'number') {
//             obj[variable]=obj[variable]*2;
//         }
//     }
//     return obj;
// }
// console.log(multiplyNumeric (image));
// console.log(image);


// Задание 3 (Калькулятор)
// var arr = [], sum=0, number;
// do {
//   number = prompt('введите число', '');
//   arr.push(parseInt(number));
// } while (number !== null && number !== '');
//
// for (var i = 0; i < arr.length-1; i++) {
//   sum=sum+arr[i];
// }
// console.log(arr);
// console.log(sum);

//задание 4

// var arr = [1, 2, 'value', false];
//
// function find(array, value) {
//     if (array.indexOf) {
//       return array.indexOf(value);
//     }
//
//     // for (var i = 0; i < array.length; i++) {
//     //   if (array[i]===value)return i;
//     //   console.log(array[i]);
//     // }
//     // return -1;
// }
// console.log(find(arr, 0));

//задание 5

var array = [5, 7, 4, 8, 3, 0];

function  filterRange(arr, a, b) {
    var result =[];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]>=a && arr[i]<=b){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filterRange(array, 3, 5));
