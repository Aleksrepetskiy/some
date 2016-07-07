
// var year = prompt ('Какой сейчас год?');
// if (+year===2016) {
//   alert('Вы правы!');
// } else if (+year===0) {
//   alert('Введите год');
// } else {
//   alert('С луны свалися? 2016!');
// }

// var number = prompt ('Введите любое целое число?');
// if (number>'0' ) {
//   alert ('1');
// } else if (number==='0') {
//   alert ('0');
// } else if (number <'0') {
//   alert ('-1');
// } else {
//   alert("fgkgfk");
// }

// var userName = prompt('Введите логин');
// if (userName ==='admin') {
//   var password = prompt ('Введите пароль');
//   if (password ==='passw0rd') {
//     alert ('Welcome home!')
//   } else if (password === null) {
//     alert( 'Canceled');
//   } else {
//     alert ('Wrong password');
//   }
// } else if (userName === null) {
//   alert( 'Canceled');
// } else {
//   alert('Access denied');
// }

// var a = 1, b = 1;
// var result;
// result = (a + b >= 3) ? 'Yep!' : 'Noup!';
// console.log (result);

var name = 'admin', text;
text = (name == 'admin') ? 'Hi' :
    (name == 'manager') ? 'Hello':
    (name == '') ? 'No login':
    '';
alert(text);
