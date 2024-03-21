// Encriptación
function encriptarTexto() {
    var textoOriginal = document.getElementById('textoOriginal').value;

    textoEncriptado = textoOriginal.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('textoEncriptado').value = textoEncriptado;

    // Limpiar el área de texto del texto original
    document.getElementById('textoOriginal').value = "";
}

// Desencriptar
function desencriptarTexto() {
    var textoEncriptado = document.getElementById('textoEncriptado').value;

    textoDesencriptado = textoEncriptado.replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/ai/g, "a")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e");

    document.getElementById('textoOriginal').value = textoDesencriptado;

    // Limpiar el área de texto del texto encriptado
    document.getElementById('textoEncriptado').value = "";
}

// Copiar texto 
function copiarTexto() {
    var textoEncriptado = document.getElementById('textoEncriptado');

    textoEncriptado.select();
    textoEncriptado.setSelectionRange(0, 99999); // Para móviles
    document.execCommand("copy");
}

// Mostrar mensaje de error
function mostrarMensajeError(mensaje) {
    var mensajeError = document.getElementById('mensajeError');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('mostrar'); // Agregar la clase para mostrar el mensaje
}

// Ocultar mensaje de error
function ocultarMensajeError() {
    var mensajeError = document.getElementById('mensajeError');
    mensajeError.classList.remove('mostrar');
}

// Validar encriptación
function validarEncriptacion() {
    var textoOriginal = document.getElementById('textoOriginal').value;

    if (textoOriginal.trim() === "") {
        mostrarMensajeError("El texto está vacío, no es posible encriptarlo.");
    } else if (/[A-Z]/.test(textoOriginal)) { // Validar mayúsculas
        mostrarMensajeError("No se pueden agregar mayúsculas al texto para encriptar.");
        limpiarCajasTexto();
    } else {
        ocultarMensajeError();
        encriptarTexto();
    }
}

// Validar desencriptación
function validarDesencriptacion() {
    var textoEncriptado = document.getElementById('textoEncriptado').value;

    if (textoEncriptado.trim() === "") {
        mostrarMensajeError("El texto está vacío, no es posible desencriptarlo.");
    } else if (/[A-Z]/.test(textoEncriptado)) {
        mostrarMensajeError("No se pueden agregar mayúsculas al texto para desencriptarlo.");
        limpiarCajasTexto();
    } else {
        ocultarMensajeError();
        desencriptarTexto();
    }
}

function limpiarCajasTexto() {
    document.getElementById('textoOriginal').value = "";
    document.getElementById('textoEncriptado').value = "";
}
