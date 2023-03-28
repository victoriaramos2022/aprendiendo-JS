// ARRAYS podemos guardar muchos datos, se separa por comas 

//Array ["victoria", 25, "Soyapango"]

//let frutas = ["banana", "manzana", "pera"]
//document.write(frutas)

//los arrayas empiezan de la posicion 0
//document.write(frutas[0])

//  ARRAYS ASOCIATIVOS
// es un array asociado

/*let pc = {
    nombre: "VictoriaPC",
    procesador: "intelcore",
    ram: "64GB",
    espacio: "1TB",

//};

//document.write(pc["nombre"])

//let nombre = pc["nombre"];
//let procesador = pc["procesador"];
//let ram = pc["ram"];
//let espacio = pc["espacio"];

//frase = `El nombre de la PC es ${nombre}`
//document.write(frase)*/

//if pregunta una vez y se ejecuta
// WHILE pregunta hasta que la condicion sea FALSE

/*let numero = 0

while (numero < 10){
    numero++
    document.write(numero + "<br>")
}*/

//DO WHILE, PRIMERO ejetuca y luego pregunta 

/*let numero = 0

do{
    document.write(numero + "<br>")
    numero ++
    
}
while (numero <= 10){
 
}*/

//BREAK TERMINA LA SENTENCIA 

/*let numero = 0

while (numero < 10){
    numero++
    document.write(numero + "<br>");
    if (numero == 8){
        break;  //hace que finalice el buble y se detiene en 8, ya no en 10
    }
}*/

// FOR ES UN buble determinado, se ejecuta cuantas veces nosotros le decimos
// declaracion e inicializacion
// condicion
//aumento o decremento

//let  i = 20;

// la i por fuera vale 20 dentro del buble 0

/*for (let i = 0; i < 6; i++) {
    document.write(i+ "<br>");
    
}*/

//CONTINUE, SE SALTE y continua  
/*for (let i = 0; i < 6; i++) {
     if(i==3){
        continue // se detiene, y pasa al siguiente en este caso 4
     }
     document.write(i+ "<br>");
} */

// FOR IN:deolvernos la posicion 0 1 2 3

// FO OF: devolverns lo que hay en el VALOR array perro gato conejo

/*let animales =["perro", "gato", "conejo"]

for (animal in animales){
    document.write(animal + "<br>");
}


for (animal of animales){
    document.write(animal + "<br>");
}*/

//label NOS PERMITE ASOCIAR UN BUCLE

//FUNCIONES 
// creamos un pedazo de codigo, para que podamos usarla de veuelta y no crear el codigo otra vez

/*function saludar(){
    respuesta = prompt ("hola");
    if(respuesta == "bien"){
        alert("me alegro")
    }else {
        alert("que mal")
    }
}*/

//saludar()//LLAMANDO A LA FUNCION 
//saludar() // vuelvo a llamarla para ejecutarla de nuevo

//OTRA FORMA DE CREAR FUNCTION
/*saludar = function(){
    respuesta = prompt ("hola");
    if(respuesta == "bien"){
        alert("me alegro")
    }else {
        alert("que mal")
    }
}

saludar()*/

//RETURN
 //LO QUE DECUELVE EL VALOR , COMO EL BREAK SE TERMINA DE EJECTAR EL BUCLE, ES LO MISMO


 //PARAMETROS, lo que ponemos entre parentesis
 //en lugar de estar declarando cada numero, mas dinamico
 /*function suma ( num1, num2){
    let res = num1 + num2;
    document.write (res);
    document.write ("<br>");
 }

 suma(88,20)
 suma(22,55)*/


/*function saludar ( nombre){
    let frase = `HOla ${nombre} tu puedes`
    document.write (frase);
    document.write ("<br>");
 }

saludar("Victoria")*/


//SCOPE CUANDO CREAMOS UNA VARIBLE DENTRO DE LA FUNCION, SOLO AHI EXISTEN: locales 
// Fuera de la funciones son globales.

/*Qué es el Scope Local
Cuando puedes acceder a una variable únicamente en cierta parte
 del código, se dice que esa variable está declarada en el 
 scope local. Estas también son conocidas como variables 
 locales. Un ejemplo de esto es cuando una variable está 
 declarada dentro de un bloque o una función. 
 Si tratas de acceder a esta variable fuera de esta función
  o bloque, tendrás un error que dirá que la variable no
  está definida.*/

/*Qué es el Scope Global
Se dice que una variable está en el sope global cuando está declarada 
fuera de una función o de un bloque. También son conocidas como variables globales. 
Puedes acceder a este tipo de variables desde cualquier parte de tu código, 
ya sea dentro o fuera de una función. */

//OTRA FORMA DE CREAR FUNCIONES 

/*const saludar = function(nombre){
    let frase = `HOla ${nombre} tu puedes`
    document.write (frase);
    document.write ("<br>");
}
saludar("Victoria")*/


//FUNCIONES FLECHA
// se reemplaza el fuction por una fecla
/*const saludar = (nombre) => {
    let frase = `HOla ${nombre} tu puedes`
    document.write (frase);
    document.write ("<br>");
}
saludar("Victoria")*/

// SI SOLO ES UN parametro no es necesarioponer parentesis

//EJERCICIO: PASAr a los mayores de edad y la primera que pase luego de las 2AM
// ENTRA gratis

/*let free = false;

const validarCliente = (time)=>{
    let edad = prompt("cual es tu edad?");
    if (edad > 18){
        if (time >= 2 && time < 7 && free == false){
            alert("podes pasar y entras gratis");
            free=true;
        }else{
            alert(`son las ${time}:00HS y podes pasar pero vas a pagar`);
        }
    }else{
        alert("no puede pasar");
    }
}

validarCliente(23);
validarCliente(2);*/

//alumnos asutentes y presentes 
//WHATSAP 

