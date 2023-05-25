alert("Введите коэффициенты квадратного уравнения");
var a = prompt("Введите первое значение ");
var b = prompt ("Введите второе значение ");
var c = prompt ("Введите третье значение ");

dis = (b**2)-(4*a*c);

	if(dis>0){
		res1 = (-b + Math.sqrt(dis))/(2*a);
		res2 = (-b - Math.sqrt(dis))/(2*a);
		alert('Первый корень равен: ' + res1);
		alert('Второй корень равен: '+ res2);
	}

	else if(dis==0){
		res = (-b/(2*a));
		alert('Первый корень равен: '+ res);
	}

	else if(dis<0){
		res1 = (-b + Math.sqrt(Math.abs((b**2)-4*a*c)))/(2*a);
		res2 = (-b - Math.sqrt(Math.abs((b**2)-4*a*c)))/(2*a);
		alert('Первый корень равен: ' + res1 + ' i');
		alert('Второй корень равен: ' + res2 + ' i');
}
