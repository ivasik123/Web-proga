function func(){
var a = Number(document.getElementById("a").value);
var b = Number(document.getElementById("b").value);
var c = Number(document.getElementById("c").value);

dis = (b**2)-(4*a*c);
if(a!=0 && b!=0 && c!=0){
	if(dis>0){
		res1 = (-b + Math.sqrt(dis))/(2*a);
		res2 = (-b - Math.sqrt(dis))/(2*a);
		document.getElementById("result1").innerHTML = ("Первый корень: " + res1)
		document.getElementById("result2").innerHTML = ("Первый корень: " + res2)
	}

	else if(dis==0){
		res = (-b/(2*a));
		document.getElementById("result1").innerHTML = ("Первый корень: " + res)
	}

	else if(dis<0){
		re = -b/(2*a);
		im = ((Math.sqrt(Math.abs(dis)))/(2*a));
		document.getElementById("result1").innerHTML = ("Первый корень: " + re + "+" + im + "i");
		document.getElementById("result2").innerHTML = ("Второй корень: " + re + "-" + im + "i");
	}
}
else{
document.getElementById("result1").innerHTML = ("Это не квадратное уравнение");
	}
}
