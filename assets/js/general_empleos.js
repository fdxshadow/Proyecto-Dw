function onlyNumbers(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "0123456789";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}

function digitosRut(e) {

    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "0123456789-Kk";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}

function soloLetrasNumeros(e) {

    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz0123456789";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }

}

function soloLetras(e) {

    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }

}


function limpiar() {



    $('#empresa').selectpicker('val', '0');
    $('#supervSelect').selectpicker('val', []);
    $("#cargo").val("");
    $("#fechaInicio").val("");
    $("#fechaTermino").val("");
    $("#sueldo").val("0");
    $("#pais").val("0");
    $("#inputComunaSelect").val("");
    $("#listaComunaSelect").val("0");

    $('#empresa').css("border", "1px solid #ccc");
    $('#cargo').css("border", "1px solid #ccc");
    $('#fechaInicio').css("border", "1px solid #ccc");
    $('#fechaTermino').css("border", "1px solid #ccc");
    $('#sueldo').css("border", "1px solid #ccc");
    $('#pais').css("border", "1px solid #ccc");
    $('#inputComunaSelect').css("border", "1px solid #ccc");
    $('#listaComunaSelect').css("border", "1px solid #ccc");

    $('#nombreSup').css("border", "1px solid #ccc");
    $('#rutSup').css("border", "1px solid #ccc");
    $('#correo').css("border", "1px solid #ccc");
    $('#telefono').css("border", "1px solid #ccc");

    $('#errorNomSup').text("");
    $('#errorRutSup').text("");
}