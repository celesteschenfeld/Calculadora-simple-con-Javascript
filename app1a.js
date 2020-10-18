let var1;
let var2;

function sumar(numero1, numero2){
    let resultadoSuma = numero1 + numero2;

    return document.getElementById("resultado").innerHTML='El resultado de la suma es : ' + resultadoSuma;
} 

function restar(numero1,numero2){
    let resultadoResta = numero1 - numero2;

    return document.getElementById("resultado").innerHTML='El resultado de la resta es : ' + resultadoResta;
}

function multiplicar (numero1,numero2){
    let resultadoMultiplicacion = numero1*numero2;

    return document.getElementById("resultado").innerHTML='El resultado de la multiplicación es : ' + resultadoMultiplicacion;
}

function dividir (numero1,numero2){
        if(numero2==0) {
            alert('ERROR, DIVISION POR 0');
        } else {
            let resultadoDivision = numero1/numero2;
            return document.getElementById("resultado").innerHTML='El resultado de la division es : ' + resultadoDivision;
        }
}

function calcular(string) {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    document.getElementById("resultado").style = "display: block;";

    switch(string) {
        case "suma": sumar(numero1, numero2); break;
        case "resta": restar(numero1, numero2); break;
        case "mul": multiplicar(numero1, numero2); break;
        case "div": dividir(numero1, numero2); break;
    }
}
