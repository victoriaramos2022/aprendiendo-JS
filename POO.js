/*POO
nos sirve para programar objetos como lo harimos en la vida real,
es un paradigma de la programacion, que lo que hace es actulizar la forma
que programamos haciendolo como lo hicieramos en la vida real

una paradigma que nos crea soluciones a los problemas que se nos 
psesentan

 CLASE es la plantilla, como la receta, una fabrica de objetos 

las CLASES crean OBJETOS 

ATRIBUTO son las caractetisticas que tiene el OBJETO  

METODO es lo que pude hacer nuestro objeto 

CONSTRUCTOR una funciona obligatoria, nos permite contuir las caractetiticas
dek objeto

INSTANCIACION 
Es un término que se utiliza en la programación basada en objetos, 
una instancia se utiliza para indicar que un objeto pertenece a otro.


 class animal { // creamos la clase 
    //constructor, creamos lo que tiene el animal
   // constructor( espicie, edad, color){ // patentecis los parametros, lo que lleva el animal
       // this.espicie = espicie;
        //this.edad = edad;
       // this.color = color;
       // this.info = `soy ${this.espicie}, tengo ${this.edad} y soy de ${this.color}`;
        //THIS es el objeto que voy a crear 
   // }

   // verInfo(){
        //document.write(this.info + "<br>")
  //  }
     /*METODOS SON LAS ACCIONES QUE PODEMOS HACER, 
    SE CREAN DENTRO DE LA CLASE, es lo mismo que las FUNCIONES
    SI Se crean dentro son METODOS si se cren fuera son FUNCIONES
 
    no se pUEDE FUNCIONES FLECHA*/

// }




 // new para crear un objeto "animal" por que esa es la clase
 // entre paretensis, van los parametros

//let perro = new animal("perro", 5, "marron"); 
//let gato = new animal("gato", 7, "negro"); 
//let sapo= new animal("sapo", 9, "verde"); 

//document.write(perro) // nos muestra que es un objeto
//para ver sus propiedades como THIS es un objeto perro se convierte en el THIS
// esto ya no es necesario si usamos metodos document.write(perro.info + "<br>") 
//document.write(gato.info + "<br>")
//document.write(sapo.info + "<br>")


//USAMOS ESTO PARA HACER USO DEL METODO CREADO
//perro.verInfo();
//gato.verInfo();
//sapo.verInfo();

/*la forma en la que costruimos los objeto
ABSTRACCION: tratamos de reducir las caracteriticas de un objeto

MODULARIDAD: tener un problema grande y separarlo por partes 100 horas, 100 pedacitos pequeños

ENCAPSULAMIENTO: que la data este privada que el ususario no tenga acceso
Es la propiedad que permite asegurar que la información
 de un objeto está oculta del mundo exterior.

POLIMORFISMO: ver como un objeto se comporta de manera distinta ante el 
mismo metodo
la capacidad de comportarse distinto por sus propiedades

EJEMPLO:
class animal { 
    constructor( espicie, edad, color){ 
        this.espicie = espicie;
        this.edad = edad;
        this.color = color;
        this.info = `soy ${this.espicie}, tengo ${this.edad} y soy de ${this.color}`;
        
    }

    verInfo(){
        document.write(this.info + "<br>")
    }

    ladrar(){
        if(this.espicie == "perro"){
            document.write("WAAW"+ "<br>")
        }else{
            document.write("no puedes ladrar eres un "+ this.espicie + "<br>")
        }
    }


 }


let perro = new animal("perro", 5, "marron"); 
let gato = new animal("gato", 7, "negro"); 
let sapo= new animal("sapo", 9, "verde"); 


perro.ladrar();
gato.ladrar();
sapo.ladrar();



/*HERENCIA
tomar lo que otra clase tiene, y agregarle cositas nuevas 

 EJEMPLO DE HERENCIA

class Animal { 
    constructor( espicie, edad, color){ 
        this.espicie = espicie;
        this.edad = edad;
        this.color = color;
        this.info = `soy ${this.espicie}, tengo ${this.edad} y soy de ${this.color} y soy ${this.raza}`;
        
    }

    verInfo(){
        document.write(this.info + "<br>")
    }

 }

 class Perro extends Animal { // la palabra extends , que esta herarando de la otra clase 
    constructor(espicie,edad, color, raza){
        super(espicie,edad, color) // super para hererdar los parametros, ya no ponenos THIS
        this.raza = raza //aqui si por que es nuevo párametro
    }
    ladrar(){
        alert("WAAAW")
    }
 }


let perro = new Animal("perro", 5, "marron", "CHIGUGUA"); 
let gato = new Animal("gato", 7, "negro"); 
let sapo= new Animal("sapo", 9, "verde"); 


perro.verInfo();
gato.verInfo();
sapo.verInfo();*/

/*METODOS ESTATICOS
No necesita que la clase se defina para poder ser creado

METODOS ACCESORES (GETTERS Y SETTERS)
SON PROPIEDADES 
SET modifica
get obtiene*/


//ejemplo de POO, en OPP.JS

/*METODO DE CADENA */

//let cadena = "cadena de prueba"

//resultado = cadena.trim()

//document.write(resultado.length);

/*
BUSCA CADENAS Y NOS DEVUELVE UNA VALOR
concat() junta 2 o mas cadenas y retorna 1 nueva, concaneta, añade mas 
starstWith() verifica si comienza con ..., devuelve TRUE
endsWith() verific si termina con ..., devuelve TRUE

includes() determina si una cadena de texto puede ser encontrada 
dentro de otra cadena de texto, devolviendo true o false
LAS ENCUENTRA EN CUALQUIR LADO

indexOf() la posicion en la que se encuentra la LETRA, en numero
y si es la palabra donde comienza la PALABRA si da -1 es por que existe
de adelante para atras

lastIndexOF()en lugar de devolver la primera devuelve la ULTIMA pocision
va de atras para adelante

MODIFICA Y RELLANA
padStart() rellanar la cadena al inicio con los caracteres deseados
padEnd()rellanar la cadena al final con los caracteres deseados
Si ponemos 20 va a rellenar hasta llegar a 20, osea puede no moctrar todo lo que agg
repeat() decvuelve la cadena pero repetida


TRASFORMA A LA CADENA 
split() divide cadena como le pidamos
subString() nos retorna un pedazo de la cadena (0,6) desde donde inicia y donde termina
toLowerCase() covierte la cadena en miniscula
toUpperCase() covierte la cadena en mayuscula 
toString() convierte a string un dato
trim() elimina nos espacios en blanco al inicio y al final
trimEnd()elimina nos espacios en blanco  al final
trimStart()elimina nos espacios en blanco al inicio 
valueOf() retorna

*/


/*
METODOS DE ARRAYS

let nombres = ["pedro", "victoria", "juan" ]

resultado = nombres.slice(0,1)

document.write(resultado + "<br>"); 
document.write(nombres);

TRASFORMA EL ARRAYS 

pop() : Elimina el último elemento de un array y lo devuelve. , muestra cual elimino
shift() : Elimina el primer elemento del array y lo retorna.
push() : Añade uno o más elementos al final de un array y devuelve la nueva longitud CUANTOS HAY del array.
reverse() : Invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.
unshift() : Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud CUANTOS HAY del array.
sort() : Ordena los elementos del array y retorna el arreglo ordenado. Los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto.
splice() : Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

METODOS ACCESORES 

join() : Une todos los elementos de un array en una cadena. Podemos pasarle como parámetro el carácter de separación que debe agregar entre los elementos.
slice() : Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

REPETICION 
filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.
forEach() : Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo.


let nombres = ["pedro", "victoria", "juan" ]

resultado = nombres.forEach(nombres => nombres.length > 7)

document.write(resultado + "<br>"); 

*/

let numero = Math.random()*100;
numero = Math.round(numero);

document.write(numero)
/*
MATH

METODOS
sqrt() raiz cudrada
cbrt() raiz cubica
max() dice el num mayor
min() devuelve el num mas pequeño 
randow() devuelve un numero aleatorio}


numero = Math.random()*100;
numero = numero.toString();
num = numero[0]+ numero[1];
if (num[1] == "."){
    num = numero[0];
}
document.write(num)



round() redondea

let numero = Math.random()*100;
numero = Math.round(numero);

document.write(numero)


fround() flotante
floor() lo redondea hacia abajo, por ejemplo 4.999, decuelve 9 
trunc() elimina los decimales 


PI 3.14


*/

