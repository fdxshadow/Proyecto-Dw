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
    var i = 0; var mul = 0; var digito = 0;
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

function validarDecimal(nota) {
    let nuevaNota = "";
    let notaString = nota.toString();
    let dataNota = notaString.split(".");

    if (dataNota.length == 2) {
        if (dataNota[0].length > 1 || dataNota[1].length > 1) {
            return NaN;
        } else {
            if (dataNota[0] == "" || dataNota[1] == "") {
                return NaN;
            } else {
                notaString = notaString.replace('.', '');
                for (var i = 0; i < notaString.length; i++) {
                    if (notaString.charAt(i) != ' ') {
                        nuevaNota = nuevaNota + notaString.charAt(i);
                    }
                }
                switch (nuevaNota.length) {
                    case 1:
                        nuevaNota = nuevaNota + ".0";
                        break;
                    case 2:
                        nuevaNota = nuevaNota.charAt(0) + "." + nuevaNota.charAt(1);
                        break;
                }
                return parseFloat(nuevaNota);
            }
        }
    } else if (dataNota.length == 1) {
        if (dataNota[0].length > 1) {
            return NaN;
        } else {
            nuevaNota = dataNota[0] + ".0";
            return parseFloat(nuevaNota);
        }
    } else {
        return NaN;
    }
}


module.exports = {
    validaRut,
    validarDecimal
};
