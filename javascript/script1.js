var numero =prompt("Tu numero aqui, salva una Kathy");
numero=numero.toString();
console.log(numero+2);

var numero= prompt ("Ingresa un numero");

if (numero >= 18) {
	console.log("menor:"+numero);
}else if (numero>10) {
	console.log("mayor:"+numero);
}

do{
var numero =prompt("Ingresa un numero");
var numero =paseInt(numero);
	console.log(numero);
}while(1==numero);