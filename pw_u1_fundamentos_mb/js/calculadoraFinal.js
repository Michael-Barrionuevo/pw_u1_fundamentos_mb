let num1 = null;
let num2 = null;


function mostrarDisplay(valor) {
    let elemento = document.getElementById("display");
    elemento.innerText = elemento.innerText + valor;
}


function mostrarResultado(resultado) {
    document.getElementById("display").innerText = resultado;
}


function sumar() {
    var n1 = parseFloat(document.getElementById('idnumero1').value);
    var n2 = parseFloat(document.getElementById('idnumero2').value);
    var resultado = n1 + n2;
    mostrarResultado(resultado);
}


function restar() {
    var n1 = parseFloat(document.getElementById('idnumero1').value);
    var n2 = parseFloat(document.getElementById('idnumero2').value);
    var resultado = n1 - n2;
    mostrarResultado(resultado);
}


function multiplicar() {
    var n1 = parseFloat(document.getElementById('idnumero1').value);
    var n2 = parseFloat(document.getElementById('idnumero2').value);
    var resultado = n1 * n2;
    mostrarResultado(resultado);
}


function dividir() {
    var n1 = parseFloat(document.getElementById('idnumero1').value);
    var n2 = parseFloat(document.getElementById('idnumero2').value);
    if (n2 === 0) {
        mostrarResultado("Error");
        return;
    }
    var resultado = n1 / n2;
    mostrarResultado(resultado);
}


function limpiar() {
    document.getElementById("display").innerText = "";
}


function borrarUltimo() {
    const el = document.getElementById("display");
    el.innerText = el.innerText.slice(0, -1);
}


function igual() {
    const display = document.getElementById("display");
    let expresion = display.innerText;

    try {
        
        /* aqui calculamos el porcentaje*/
        expresion = expresion.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

        const resultado = eval(expresion);
        display.innerText = resultado;
    } catch (error) {
        display.innerText = "Error";
        console.error(error);
    }
}

