const obtenerInformacion = (materia)=>{
    materias = {
        ciencia: [ "Jael", "pedro", "juan", "santiago", "victoria", "maria"],
        sociales: ["Ramos", "pedro", "juan", "santiago", "victoria"],
        lenguaje: ["Luis" ,"pedro",  "santiago", "victoria", "maria"],
        matematicas: ["Victor", "pedro", "juan", "santiago","maria"]
    }

    if (materias [materia] !== undefined){
        return [materias[materia], materia, materias];

    }else{
        return materias;
    }
} 

const mostrarInfo = (materia)=>{
    let informacion = obtenerInformacion(materia);
if (informacion !== false){
    let profesor = informacion[0][0];
    let alumnos = informacion [0];
    alumnos.shift();
    document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:green"> 
    ${profesor} </b> <br> Los Alumnos son: <b style="color:red"></b> ${alumnos}</b <br><br>`);


}

}

const cantidadClases = (alumno) =>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0
    for (info in informacion){
        if (informacion[info].includes (alumno)){
            cantidadTotal++
            clasesPresentes.push(" "+ info);
        }
    }
    return `<br> <b style="color:blue"> ${alumno}</b> esta en ${cantidadTotal} clases<br> <br> 
    Esta cursando las clases: <b>${clasesPresentes}</b> <br> <br>`
    
}

mostrarInfo("ciencia")
mostrarInfo("lenguaje")
mostrarInfo("sociales")
mostrarInfo("matematicas")

document.write(cantidadClases("victoria"))