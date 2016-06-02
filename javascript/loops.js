//var numero =prompt("Ingresa tu corazon");

//for (var i =0;i < numero ; i++) {
	//console.log(i);
//}

//se suman los numeros y se muestra el resultado


function suma(numero1,numero2){
      var resultado=0;

   resultado = numero1 + numero2;

   return resultado; 
}

for (var i = 0; i < 5; i++) {
	var n1 =parseInt(prompt("Ingresa numero maldito"));
	var n2 =parseInt(prompt("Ingreso numero bendito"));

	nueva= suma(n1,n2);

	alert(nueva*2);

}

