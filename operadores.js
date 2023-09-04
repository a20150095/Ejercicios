alert("Bienvenidos al restaurante. Esta es tu cuenta ");
//Ingresar Datos
var entrada = parseInt (prompt("Ingrese el costo de la Entrada"));
var plato = parseInt (prompt("Ingrese el costo del plato principal"));
var postre = parseInt (prompt("Ingrese el costo del postre"));
alert("Revise los resultados en la consola presionando F12 ");

//Procesar Datos
var total = entrada + plato + postre;
var IGV = (total*0.18)+total;



//Mostrar Datos
console.log("El costo de tu entrada es: " +entrada);
console.log("El costo de tu plato principal es: " +plato);
console.log("El costo de tu postre es: " +postre);
console.log("El costo total es: " +total);
console.log("El costo total con igv es: " +IGV);



