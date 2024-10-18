/*for(i=0;i<10;i++){
document.write("hola mundo" + "<br>"); }*/
/*es un buvcle que permite trener nyne*/

//numeros pares del 3 al 15
/*for(i=3; i<=13; i++){
   
    if(i%2===0){
        document.write("numeros par :" +i +"<br>")
    }
}
*/

/*for(j=1; j<=10; j++){

document.write("hola mundo" + "<br>");  */
var h = prompt("ingrese un numero para sacar su factorial"); // Solicita al usuario que ingrese un número y lo almacena en la variable 'h'
// Convierte la entrada del usuario a un número entero
h = parseInt(h);
var respuesta = 1; // Inicializa la variable 'respuesta' en 1 para almacenar el resultado del factorial
var dentro = ""; // Inicializa una cadena vacía 'dentro' para construir la operación
for (i = 1; i <= h; i++) {
  // Bucle que empieza en 1 hasta h el numeor ingresado por el usuario'
  respuesta *= i; // Multiplica el valor actual de 'i' al resultado acumulado en 'respuesta'
  dentro += i; // Agrega el número actual 'i' a la cadena 'dentro'
  if (i < h) {
    //si i es menor que el numero ingresado por el usuario el programa incorporara la X para saber que lo multiplica

    dentro += "X"; // Se usa 'X' para representar la multiplicación
  }
}
console.log("el resultado seria:");
console.log((dentro += " = " + respuesta)); //desplegamos por pantalla

// seria 1*2*3*4*5*6*7= 5040
