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

var image = {
width: 100,
height: 400,
title: 'Cool image'
};

function multiplyNumeric (obj) {
    for (var variable in obj) {
        if (typeof obj[variable] == 'number') {
            obj[variable]=obj[variable]*2;
        }
    }
    return obj;
}
console.log(multiplyNumeric (image));
console.log(image);
