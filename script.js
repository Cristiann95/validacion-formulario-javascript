const submitFunction = (event) => {
    if (validarFormulario()) {
        event.preventDefault();
        alert(
            'Los datos enviados fueron:' + '\n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n'+
            'Apellido: ' + document.getElementById('apellido').value + '\n'+
            'Documento: ' + document.getElementById('documento').value + '\n'+
            'Email: ' + document.getElementById('email').value + '\n'+
            'Edad: ' + document.getElementById('edad').value + '\n'+
            'Actividad: ' + document.getElementById('actividad').value + '\n'+
            'Nivel de estudio: ' + document.getElementById('nivelEstudio').value + '\n'
        )
    } else {
        event.preventDefault();
    }


}


document.getElementById('formulario').addEventListener('submit', submitFunction);

function validarFormulario() {

    // Esto valida los campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById("error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
        if (campo.value == '') {
            mostrarError(errorCampo, 'Este campo es requerido!');
            validacionCorrecta = false;
        } else if (campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(errorCampo, 'Este campo debe tener al menos 3 caractéres!');
            validacionCorrecta = false;
        } else {
            ocultarError(errorCampo);
        }
    })

    // Esto valida el campo email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if (email.value == '') {
        mostrarError(errorEmail, 'Este campo es requerido!')
    }
    else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        ocultarError(errorEmail);
    } else {
        mostrarError(errorEmail, 'Ingrese un correo electrónico válido!');
    }

    // Validación de edad

    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad');

    if (edad.value == '') {
        mostrarError(errorEdad, 'Este campo es requerido!')
        validacionCorrecta = false;
    } else if (edad.value < 18) {
        mostrarError(errorEdad, 'Debes ser mayor de 18 años para registrarte!');
        validacionCorrecta = false;
    } else {
        ocultarError(errorEdad);
    }

    // Validación de la actividad

    const actividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad');

    if (actividad.value == '') {
        mostrarError(errorActividad, 'Por favor, seleccione una actividad');
        validacionCorrecta = false;
    } else {
        ocultarError(errorActividad);
    }

    // Validación de nivel de estudio

    const nivelEstudio = document.getElementById('nivelEstudio');
    const errorNivelEstudio = document.getElementById('errorNivelEstudio');
    if (nivelEstudio.value == '') {
        mostrarError(errorNivelEstudio, 'Por favor, seleccione un nivel de estudio');
        validacionCorrecta = false;
    } else {
        ocultarError(errorNivelEstudio);
    }

    // Validar los términos y condiciones

    const aceptoTerminos = document.getElementById('aceptoTerminos');
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos');

    if (!aceptoTerminos.checked) {
        mostrarError(errorAceptoTerminos, '¡Debes aceptar los términos y condiciones!');
        validacionCorrecta = false;
    } else {
        ocultarError(errorAceptoTerminos);
    }

    return validacionCorrecta;

}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}