/*
console.log()
es un mensaje depurativo

console.assert()
Registra un mensaje y envía una traza de error a la consola si el primer argumento es false.

console.clear() 
Limpia la consola.

console.error()
Muestra un mensaje de error.

console.info()
Muestra un mensaje de información en la consola. 

console.log()
Para salida general de la información registrada. 

console.table()
Muestra datos tabulares en forma de tabla.

console.warn()
Muestra un mensaje de advertencia

console.dir()
Muestra un listado interactivo de las propiedades de un objeto JavaScript específico. Este listado permite usar triángulos de lista desplegables para examinar el contenido de objetos hijo.


CONTEO
console.count()
Registra el número de veces que esta línea ha sido llamada con la etiqueta dada.

console.countReset() (en-US)
Reinicia el valor del contador para la etiqueta dada.


AGRUPACIONES

console.group() (en-US)
Crea un nuevo grupo, indentando todos los mensajes subsecuentes en un nuevo nivel. Para retroceder un nivel, se utiliza groupEnd().


console.groupEnd() (en-US)
Finaliza el grupo actual.

console.groupCollapsed() (en-US)
Crea un nuevo grupo, indentando todos los mensajes subsecuentes en un nuevo nivel. A diferencia de group(), inicia con la línea de grupo colapsada, requiriendo el uso de un botón de apertura para expandir el grupo. Para retroceder un nivel, se utiliza groupEnd().

TEMPORIZACION

console.time()
Inicia un temporizador con un nombre especificado como parámetro. Hasta 10 000 temporizadores simultáneos pueden ejecutarse en una página determinada.

console.timeEnd()
Detiene el temporizador especificado y registra el tiempo transcurrido en milisegundos desde que fue iniciado.

console.timeLog() (en-US)
Muestra el valor del temporizador especificado en la consola.
 */


const materias = {
    lenguaje: [90,6,4,"lenguaje"],
    matematias: [92,6,4,"matematicas"],
    ciencia: [91,6,4,"ciencia"],
    sociales: [92,6,4, "sociales"],
    ingles: [95,6,4, "ingles"],
    programacion: [75,6,4, "programacion"]
}

const aprobo = ()=>{
    for(materia in materias){

        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);

        if(asistencias >=90){
            console.log(`%c Assitenca Aprobado` ,"color:green");
        }else{   
            console.log(`%c Asistencia Desaprobado` ,"color:red");
        }

        
        if(promedio >=7){            
            console.log(`%c Promedio Aprobado` ,"color:green");
        }else{
            console.log(`%c Promedio Desaprobado` ,"color:red");
        }

        
        if(trabajos >=3){
            console.log(`%c Trabajos Aprobado` ,"color:green");
        }else{
            console.log(`%c Trabajos Desaprobado` ,"color:red");
        }
    }
}
aprobo();