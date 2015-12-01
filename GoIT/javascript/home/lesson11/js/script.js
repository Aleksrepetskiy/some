
var arr = [];
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
	if ( nameUser === arr[i]) result = arr[i];
} if ( result === "") { 
	alert(p) 
} else {
	alert(nameUser +", вы успешно вошли");
}



