
/*var arr = [];
var i;
for (i = 0; i < 5; i++) {
	var name = prompt ('введите имя', '');
	arr.push(name);
}
console.log ('arr', [arr]);
console.log ('arr', arr.length);

var nameUser = prompt ('введите имя пользователя', ''),
len = arr.length,
result ="",
p = "Ошибка, введите корректное имя пользователя";

for ( i = 0; i < len; i++) {
	if ( nameUser === arr[i]) {
		result = arr[i];
	} 
} 
if ( result === "") { 
	alert(p) 
} else {
	alert(nameUser +", вы успешно вошли");
}*/


var arr = [];
for (var i = 0; i < 5; i++) {
	//var name = prompt ('введите имя', '');
	//arr.push(name);
	//arr[i] = name;
	arr[i] = prompt ('введите имя', '');
}
var userName = prompt ('введите имя пользователя', ''),
arrLength = arr.length,
flag = false;
for (var i = 0; i < arrLength; i++) {
	if (arr[i]===userName) {
		flag=true;
		break;
	} 
	console.log(i);
}
if (flag) {
	alert(userName +', вы успешно вошли');
}else{
	debugger;
	alert('Ошибка, введите корректное имя пользователя');
}

