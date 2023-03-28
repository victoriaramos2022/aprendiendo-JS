class Celular{
    constructor(color, peso, resolucionPantalla, resolucionCamara, ram){
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.ram = ram;
        this.encendido = false
    }

    botonEncendido(){
        if(this.encendido==false){
            alert("celular encendido");
            this.encendido = true
        }else{
            alert("celular ya esta apagado");
            this.encendido = false
        }
    }

    reiniciar(){
        if(this.encendido==true){
            alert(" reiniciando celular");
            this.encendido = true
        }else{
            alert("celular esta apagado");
        }
    }

    tomarFoto(){
        alert(`foto tomada con una resolucion de: ${this.resolucionCamara}`);
    }

    grabarVideo(){
        alert(`grabando video en resolucion de: ${this.resolucionCamara}`);
    }

    mobileInfo(){
       return `
       Color: <b>${this.color}</b> </br>
       Peso: <b>${this.peso}</b> </br>
       Resolucion de camara: <b>${this.resolucionPantalla}</b> </br>
       Resolucion de Video: <b>${this.resolucionCamara}</b> </br>
       RAM: <b>${this.ram}</b> </br>
       `;
    }
}

class CelularAltaGama extends Celular{
    constructor(color, peso, resolucionPantalla, resolucionCamara, ram,camaraExtra){
        super(color, peso, resolucionPantalla, resolucionCamara, ram);
        this.camaraExtra=camaraExtra
    }

    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }

    reconocimientoFacial(){
        alert("vamos a iniciar el reconocimiento facial");
    }

    InfoAltaGama(){
        return this.mobileInfo() + `Resolucion de camara extra: ${this.camaraExtra} </br>`
        
     }

}

class App{
    constructor(descargas, puntuacion, peso){
        this.descargas=descargas;
        this.puntuacion=puntuacion;
        this.peso=peso;
        this.iniciada=false;
        this.instalada=false;
    }

    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada= true;
            alert("app iniciada")
        }

    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada= false;
            alert("app cerrada");
        }

    }

    instalar(){
        if(this.instalada == false) {
            this.instalada= true;
            alert("app instalada correctamente")
        }

    }

    desinstalar(){
        if(this.instalada == true){
            this.instalada= false;
            alert("app deinstalada correctamente")
        }
    }

    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b> </br>
        Puntuacion: <b>${this.puntuacion}</b> </br>
        Peso: <b>${this.peso}</b> </br>
 
        `;
     }
}

celular1 = new Celular ("amarillo", "155g", "5P", "fullHD", "2GB");
celular2 = new Celular ("azul", "150g", "8P", "HD", "3GB");
celular3 = new Celular ("morado", "150g", "10P", "fullHD", "4GB");

celular4 = new CelularAltaGama ("negro", "150g", "10P", "fullHD", "4GB", "full HD");
celular5 = new CelularAltaGama ("anarajando", "150g", "10P", "fullHD", "4GB", "HD");




document.write(
    `${celular1.mobileInfo()} </br>
     ${celular2.mobileInfo()} </br>
     ${celular3.mobileInfo()} </br>
   
    `
);

document.write(
    `
     ${celular4.InfoAltaGama()} </br>
     ${celular5.InfoAltaGama()} </br>
    `
);

app = new App("16.000", "5 estrellas", "900mb")
app2 = new App("16.000", "5 estrellas", "900mb")
app3 = new App("16.000", "5 estrellas", "900mb")
app4 = new App("16.000", "5 estrellas", "900mb")
app5 = new App("16.000", "5 estrellas", "900mb")
app6 = new App("16.000", "5 estrellas", "900mb")
app7 = new App("16.000", "5 estrellas", "900mb")



document.write(
    `
     ${app.appInfo()}   </br>
     ${app2.appInfo()} </br>
     ${app3.appInfo()} </br>
     ${app4.appInfo()} </br>
     ${app5.appInfo()} </br>
     ${app6.appInfo()} </br>
     ${app7.appInfo()} </br>
  
    `
);
