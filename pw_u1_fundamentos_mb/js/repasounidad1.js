function guardar() {
    limpiarMensajes();
    validarCampos();
}

function validarCampos() {
    let nombre = document.getElementById("id_nombre").value;

    if (nombre === "") {
        mostrarMensaje("Nombre necesario");
        mostrarAsterisco("id_error_nombre");

        return;

    }

    let numero = document.getElementById("id_numero").value;

    if (numero === "") {
        mostrarMensaje("Numero de Tarjeta necesario");
        mostrarAsterisco("id_error_numero");
        return;

    }
    let fecha = document.getElementById("id_fecha").value;

    if (fecha === "") {
        mostrarMensaje("Fecha necesaria");
        mostrarAsterisco("id_error_fecha");
        return;

    }
   
    let cvv = document.getElementById("id_cvv").value;

    if (cvv === "") {
        mostrarMensaje("cvv necesario");
        mostrarAsterisco("id_error_cvv");
        return;

    }
}

function mostrarMensaje(msg) {
    let mensaje = document.getElementById("id_msg_error")
    mensaje.innerText = msg;
    mensaje.style.display = "block";
}

function mostrarAsterisco(idElemento) {
    let asterisco = document.getElementById(idElemento).innerText = "*";

}

function limpiarMensajes() {

    let mensaje = document.getElementById("id_msg_error")
    mensaje.innerText = " ";
    mensaje.style.display = "none";

    const erroresAsterisco = document.querySelectorAll(".error_asterisco");
    erroresAsterisco.forEach(e => e.innerText = " ");

}

function validarNombre(nombre) {
    const patron = /^[A-Za-z]+$/;
    return patron.test(nombre);
}

function validarNumeroTarjeta(numero) {
    const patron = /^\d{16}$/;
    return patron.test(numero);
    

}

function validarFecha(fecha) {
    const patron = /^\d{4}-\d{2}-\d{2}$/;
    return patron.test(fecha);

}


function validarCVV(cvv) {
    const patron = /^\d{3,4}$/;
    return patron.test(cvv);
    

}