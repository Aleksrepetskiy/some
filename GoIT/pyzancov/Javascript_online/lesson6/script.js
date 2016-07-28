// var obj = {
//   className: 'open menu'
// };
//
// function addClass (obj, cls) {
//   var classes = obj.className.split(' ');
//   if (classes.indexOf(cls)==-1){
//     classes.push(cls);
//   }
//   obj.className = classes.join(' ');
// }
//
// addClass(obj, 'new');
// addClass(obj, 'open');
// addClass(obj, 'me');

// console.log( obj.className ); // "open menu new me"

// function  toCamelCase(str) {
//   var text = str.split('-');
//   for (var i = 1; i < text.length; i++) {
//     text[i]=text[i].charAt(0).toUpperCase() + text[i].slice(1);
//   }
//   return text.join('');
// }
//
//
//
// console.log(toCamelCase('background-color')); // 'backgroundColor'
// toCamelCase('list-style-image'); // 'listStyleImage'
// toCamelCase('-webkit-transition'); // 'WebkitTransition'

// Задание 1 (Удаление css клссов)
// var obj = {
//     className: 'open menu'
// };
// function removeClass(obj, cls) {
//     var arr = obj.className.split(' ');
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i]==cls){
//             arr.splice(i,1);
//             i--;
//         }
//     }
//     obj.className=arr.join('');
// }
// removeClass(obj, 'open'); // obj.className='menu'
// removeClass(obj, 'blabla'); // без изменений
// console.log( obj.className);

// Задание 2 (Сортировка массива строк)

// var arr = ['HTML', 'JavaScript', 'CSS'];
//
// var arrSorted = [];
// arrSorted = arr.slice().sort();
//
// console.log( arrSorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (без изменений)

// Задание 3 (Random sort)
// var arr = [1,2,3,4,5];
// function sortRandom(a,b){
//     return Math.random() - 0.5;
// }
// arr.sort(sortRandom);
// console.log( arr );

// Задание 4 (Object sort)
// function compareAge(humanA, humanB) {
//     return humanA.age-humanB.age;
// }
//
// var vasya = { name: 'Вася', age: 8 };
// var masha = { name: 'Маша', age: 18 };
// var vovochka = { name: 'Вовочка', age: 1 };
// var people = [ vasya , masha , vovochka ];
//
// people.sort(compareAge);
//
// for (var i = 0; i < people.length; i++) {
//     console.log( people[i].name);
// }

// Задание 5 (Проверка на палиндром)
// function isPal(string) {
//     var newstr;
//     var newstrarr;
//     var palidr;
//
//     if (typeof string !== "number") {
//         newstr = string.toLowerCase();
//     }
//
//     newstrarr = newstr.split('').reverse();
//     newstr = newstr.replace(/\s/g, '');
//     palidr = newstrarr.join('').replace(/\s/g, '');
//
//     if (palidr !== NaN) {
//         +palidr;
//     }
//
//     if (palidr === newstr) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isPal('Anna')); // true
// console.log(isPal('А роза упала на лапу Азора')); //true
// console.log(isPal('Вася')); //false
// console.log(isPal('12321')); //true
// console.log(isPal('123212')); //false

// // Задание 6 (Уникальные элементы массива)
//
// var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];
//
//
// function unique(arr) {
//     var result = [];
//     nextItem:
//     for (var i = 0; i < arr.length; i++) {
//         var string = arr[i];
//         for (var j = 0; j < result.length; j++) {
//             if (result[j]==string) {
//                 continue nextItem;
//             }
//         }
//         result.push(string);
//     }
//     return result;
// }
//
// console.log( unique(strings) ); // кришна, харе, 8-()

// Задание 7 (Анаграммы)
// function anClean(arr) {
//     var obj = {};
//     for (var i = 0; i < arr.length; i++) {
//         var sorted = arr[i].toLowerCase().split('').sort().join('');
//         obj[sorted] = arr[i]
//     }
//     var result = [];
//     for (var key in obj) {
//         result.push(obj[key]);
//     }
//     return result;
//
// }
//
// var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
//
// console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'



//С урока сортировка

// var classesNames = ['header', 'menu','menu', 'menu-item','menu-item','menu-item', 'footer', 'tab','menu', 'tabs-item','menu-item','header','menu'];
//
// var classesObj = {};
//
// classesNames.forEach(function (elem) {
//     if (!classesObj[elem]) {
//         classesObj[elem]=1;
//     } else {
//         classesObj[elem]+=1;
//     }
// });
//
// var result = [];
//
// for (var variable in classesObj) {
//     result.push(variable);
// }
//
// result.sort(function functionName(a,b) {
//     return classesObj[b] - classesObj[a];
//
// });
//
// console.log(classesObj);
// console.log(result);


function getMissingElement(superImportantArray) {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var result = [];
    nextItem:
        for (var i = 0; i < array.length; i++) {
            var string = array[i];
            for (var j = 0; j < superImportantArray.length; j++) {
                if (superImportantArray[j] == string) {
                    continue nextItem;
                }
            }
            result.push(string);
        }
    result.join('');
    var result1 = +result;
    return result1;
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));
