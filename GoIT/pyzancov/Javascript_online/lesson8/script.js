// Задание 1 (Chaining)
// var ladder = {
//   step: 0,
//   up: function() {
//     this.step++;
//     return this;
//   },
//   down: function() {
//     this.step--;
//     return this;
//   },
//   showStep: function() {
//     console.log( this.step );
//   }
// };
//
// ladder.up().up().down().up().down().showStep();

// Задание 2 (Calculator)

// function Calculator() {
//     this.methods = {
//         '+': function (a,b) {return parseInt(a) + parseInt(b);},
//         '-': function (a,b) {return parseInt(a) - parseInt(b);}
//     };
//
//     this.calculate = function (str) {
//         var expresion = str.split(' ');
//         var func = this.methods[expresion[1]];
//         return func(expresion[0], expresion[2]);
//     };
//
//     this.addMethod = function (symbol, func) {
//         this.methods [symbol] = func;
//
//     };
// }

// var calc = new Calculator;
// console.log( calc.calculate('3 + 7') );

// var powerCalc = new Calculator();
// powerCalc.addMethod('*', function(a, b) {
//   return a * b;
// });
// powerCalc.addMethod('/', function(a, b) {
//   return a / b;
// });
// powerCalc.addMethod('**', function(a, b) {
//   return Math.pow(a, b);
// });
//
// var result = powerCalc.calculate('2 + 3');
// console.log( result );

// Задание 3 (get/set свойства)

// function User(fullName) {
//   this.fullName = fullName;
// }
//
// var vasya = new User('Александр Пушкин');
//
// Object.defineProperty(vasya, 'firstName', {
//   get: function () {
//     return this.fullName.split(' ')[0];
//   },
//   set: function (newValue) {
//     this.fullName=newValue+ ' ' + this.fullName.split(' ')[1];
//    }
// });
//
// Object.defineProperty(vasya, 'lastName', {
//   get: function () {
//     return this.fullName.split(' ')[1];
//   },
//   set: function (newValue) {
//     this.fullName=this.fullName.split(' ')[0]+ ' ' + newValue;
//    }
// });
//
// // чтение firstName/lastName
// console.log( vasya.firstName );
// console.log( vasya.lastName );
//
// // запись в lastName
// vasya.firstName = 'Василий';
// vasya.lastName = 'Толстой';
//
// console.log( vasya.fullName );

// Задание 4 (Object counter)

function Article() {
  this.created = new Date();
  Article.totalCreated = new Date();
  Article.totalCounter++;
}
Article.totalCounter = 0;
Article.showStats = function () {
  console.log(Article.totalCreated + ' ' + Article.totalCounter)
};


new Article();
new Article();

Article.showStats();

new Article();

Article.showStats();
