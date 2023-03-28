class Calculadora {
    constructor(){

    }

    sumar (num1,num2){
        return parseInt(num1) + parseInt(num2);
    }

    restar (num1,num2){
        return parseInt(num1) - parseInt(num2);
    }

    dividir (num1,num2){
        return parseInt(num1) / parseInt(num2);
    }

    multiplicar (num1,num2){
        return parseInt(num1)  * parseInt(num2);
    }

    potenciar(num,exp){
        let numero = num;
        for (let i = 1; i < exp; i++) {
           numero = numero * num;             
        }
        return numero;
    }

    raizCuadrada(num){
        return Math.sqrt(num)
    }

    raizCubica(num){
        return Math.cbrt(num)
    }

}

const calculadora = new Calculadora()

alert ("¿que operacion deseas realizar?");
let operacion = prompt("1: suna, 2: resta, 3: dividir, 4:multiplicacion, 5:potenciacion, 6: raiz cudrada, 7: raiz cubica");

if(operacion==1){
    let nume1 = prompt("ingrese primer num");
    let nume2 = prompt("ingrese segundo num");
    resultado = calculadora.sumar(nume1,nume2);
    alert(`RESULTADO: ${resultado}`);
}
else if(operacion==2){
    let nume1 = prompt("ingrese primer num");
    let nume2 = prompt("ingrese segundo num");
    resultado = calculadora.restar(nume1,nume2);
    alert(`RESULTADO: ${resultado}`);
}
else if(operacion==3){
    let nume1 = prompt("ingrese primer num");
    let nume2 = prompt("ingrese segundo num");
    resultado = calculadora.dividir(nume1,nume2);
    alert(`RESULTADO: ${resultado}`);
}
else if(operacion==4){
    let nume1 = prompt("ingrese primer num");
    let nume2 = prompt("ingrese segundo num");
    resultado = calculadora.multiplicar(nume1,nume2);
    alert(`RESULTADO: ${resultado}`);
} 
else if(operacion==5){
    let nume1 = prompt("numero a potenciar");
    let nume2 = prompt("exponente");
    resultado = calculadora.potenciar(nume1,nume2);
    alert(`RESULTADO: ${resultado}`);
} 

else if(operacion==6){
    let nume1 = prompt("conocer la raiz cuadrada de: ");
    resultado = calculadora.raizCuadrada(nume1);
    alert(`RESULTADO: ${resultado}`);
} 

else if(operacion==7){
    let nume1 = prompt("conocer la raiz cubica de: ");
    resultado = calculadora.raizCubica(nume1);
    alert(`RESULTADO: ${resultado}`);
}

else{
    alert ("ERROR");
}