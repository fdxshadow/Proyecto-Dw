'use strict'


function validaRut(rut) { //Ej: ('10-8')

    var rut = rut;

    var resp = {
        "value": 0,
        "mensaje": ""
    }

    if (/^\d{1,9}-[\d|kK]{1}$/.test(rut)) {
        if (digitoVerificador(rut)) { //RUT CORRECTO
            resp.value = 1;
        }
        else {
            resp.value = 0;
            resp.mensaje = "Digito verificador incorrecto";
        }
    }
    else {
        resp.value = 0;
        resp.mensaje = "Formato incorrecto";
    }

    return resp;
}

function digitoVerificador(value) {
    var sum = 0;
    var i = 0; var mul=0; var digito=0;
    for (i = (value.length - 3), mul = 0; i >= 0; i-- , mul++) {
        sum += value.charAt(i) * ((mul) % 6 + 2);
    }
    digito = 11 - (sum % 11);
    if (digito == 11) {
        return (value.slice(-1) == '0');
    } else if (digito == 10) {
        return (value.slice(-1).toLowerCase() == 'k');
    } else {
        return (value.slice(-1) == digito);
    }
}


module.exports = {
    validaRut,
};
