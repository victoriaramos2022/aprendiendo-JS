let materias = {
    ciencia: [ "Jael", "pedro", "juan", "santiago", "victoria", "maria"],
    sociales: ["Ramos", "pedro", "juan", "santiago", "victoria"],
    lenguaje: ["Luis" ," pedro",  " santiago", " victoria", " maria"],
    matematicas: ["Victor", "pedro", "juan", "santiago","maria"]
}

const inscribir = (alumno, materia) =>{
    personas = materias[materia];
  
    alumnos = personas;
    if (personas.length >= 21) {
        document.write(`Lo siento <b>${alumno}</b> las clases de <b>${materia}</b> ya estan llenas <br>`);
    }else {
        personas.push(alumno);
        if (materia == "ciencia"){
                materias = {
                    ciencia: personas,
                    sociales: materias[`sociales`],
                    lenguaje: materias[`lenguaje`],
                    matematicas: materias[`matematicas`]
            }
        }
     else if (materia == "sociales"){
        materias = {
            ciencia: materias[`ciencia`],
            sociales: personas,
            lenguaje: materias[`lenguaje`],
            matematicas: materias[`matematicas`]
        }
    }else if (materia == "lenguaje"){
        materias = {
            ciencia: materias[`ciencia`],
            sociales: materias[`sociales`],
            lenguaje: personas,
            matematicas: materias[`matematicas`]
        }
    }else if (materia == "matematicas"){
    materias = {
        ciencia: materias[`ciencia`],
        sociales: materias[`sociales`],
        lenguaje: materias[`lenguaje`],
        matematicas: personas,
        }
    }

    document.write(`FELICIDADES <b>${alumno}</b> TE HAS INCRITO A <b>${materia}</b> CORRECTAMENTE <br>`);
    
}}

document.write(materias[`lenguaje`] + "<br>");

inscribir(" Jael","lenguaje", "<br>")
inscribir(" Jael","lenguaje", "<br>")
inscribir(" Jael","lenguaje", "<br>")
inscribir(" Jael","lenguaje", "<br>")
inscribir(" Jael","lenguaje", "<br>")
inscribir(" Jael","lenguaje", "<br>")
inscribir(" Jael","lenguaje", "<br>")
inscribir(" Jael","lenguaje", "<br>")
inscribir(" Jael","lenguaje", "<br>")
inscribir(" Jael","lenguaje", "<br>")
inscribir(" Jael","lenguaje", "<br>")
inscribir(" Jael","lenguaje", "<br>")
inscribir(" Jael","lenguaje", "<br>")
inscribir(" Jael","lenguaje", "<br>")

inscribir(" Jael","lenguaje", "<br>")

document.write("<br>" , materias[`lenguaje`] + "<br>");