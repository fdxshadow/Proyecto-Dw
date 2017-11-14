var estadoRutGlobal = null;

$(document).ready(function () {

    $('#listaComuna').hide();
    $('#inputComuna').show();
    // $('#SupervisorModal').on('show.bs.modal', function (evnt) {
    //     var nombre = $(evnt.relatedTarget).val();
    //     $('#empleadoSelect').text(nombre);
    // });

    $('.texto').datepicker({
        language: "es",
        format: "dd/mm/yyyy"
    });

});

function tieneLetra(palabra) {

    let tieneLetra = false;
    if (palabra.length == 0) {
        tieneLetra = false;
    }
    else {
        for (var x = 0; x < palabra.length; x++) {
            var caracter = palabra.charAt(x);
            if (caracter != " ") {
                tieneLetra = true;
            }
        }
    }

    return tieneLetra;
}

function camposVacios() {

    var faltan = [];
    var errorFecha = null;

    var egresadoSelect = document.getElementById('egresadoSelect').value;
    var empresa = document.getElementById('empresa').value;
    var supervisores = $('#supervSelect').val();
    var cargo = document.getElementById('cargo').value;
    var fechaInicio = document.getElementById('fechaInicio').value;
    var fechaTermino = document.getElementById('fechaTermino').value;
    var sueldo = document.getElementById('sueldo').value;
    var pais = document.getElementById('pais').value;
    var inputComunaSelect = document.getElementById('inputComunaSelect').value;
    var listaComunaSelect = document.getElementById('listaComunaSelect').value;

    var banderaRBTN = true;

    if (egresadoSelect == -1) {
        faltan.push('Egresado');
        banderaRBTN = false;
    }
    else {
        $('#egresadoSelect').css("border", "2px solid #5aa91b");
    }

    if (pais == 'Chile') {
        $('#inputComuna').hide();
        $('#listaComuna').show();
    }
    else {
        $('#listaComuna').hide();
        $('#inputComuna').show();
    }

    if (empresa == 0) {
        faltan.push('Empresa');
        banderaRBTN = false;
    } else {
        $('#empresa').css("border", "2px solid #5aa91b");
    }

    if (supervisores.length == 0) {
        faltan.push('Supervisores');
        banderaRBTN = false;
    }

    if (!tieneLetra(cargo)) {
        faltan.push('Cargo');
        banderaRBTN = false;
        $('#cargo').css("border", "1px solid #ccc");
    } else {
        $('#cargo').css("border", "2px solid #5aa91b");
    }


    if (fechaInicio == null || fechaInicio.length == 0) {
        faltan.push('Fecha inicio');
        banderaRBTN = false;
    } else {
        $('#fechaInicio').css("border", "2px solid #5aa91b");
    }

    if (fechaTermino != "" && fechaInicio != "") {

        var fechasInicio = fechaInicio.split("/");
        var fechasTermino = fechaTermino.split("/");

        var inicio = fechasInicio[2].toString() + '-' + fechasInicio[1].toString() + '-' + fechasInicio[0].toString();
        var final = fechasTermino[2].toString() + '-' + fechasTermino[1].toString() + '-' + fechasTermino[0].toString();

        var inicioDate = new Date(inicio);
        var finDate = new Date(final);

        if (inicioDate >= finDate) {
            errorFecha = true;
            banderaRBTN = false;
            $('#fechaTermino').css("border", "2px solid #fd5757");
        }
        else {
            $('#fechaTermino').css("border", "2px solid #5aa91b");
        }
    }

    if (sueldo == null || sueldo == 0) {
        faltan.push('Sueldo');
        banderaRBTN = false;
    }
    else {
        $('#sueldo').css("border", "2px solid #5aa91b");
    }

    if (pais == 0 || pais == null) {
        faltan.push('Pais');
        banderaRBTN = false;
    }
    else {
        $('#pais').css("border", "2px solid #5aa91b");
    }

    if (listaComunaSelect != 0) {
        $('#listaComunaSelect').css("border", "2px solid #5aa91b");
    }

    if (!tieneLetra(inputComunaSelect)) {
        $('#inputComunaSelect').css("border", "1px solid #ccc"); //PLOMO
    } else {
        $('#inputComunaSelect').css("border", "2px solid #5aa91b");
    }

    if (!tieneLetra(inputComunaSelect) && listaComunaSelect == 0) {
        faltan.push("Ciudad");
        banderaRBTN = false;
    }
    else {
        if (pais == "0") {
        }
        else {
            if (pais != 'Chile') {
                if (!tieneLetra(inputComunaSelect)) {
                    banderaRBTN = false;
                    faltan.push("Ciudad");
                }
            }
            else {
                if (listaComunaSelect != "0") {
                }
                else {
                    banderaRBTN = false;
                    faltan.push("Ciudad");
                }
            }
        }
    }


    var resp = {
        "isCompleto": banderaRBTN,
        "faltan": faltan,
        "errorFecha": errorFecha,
    }

    return resp;

}

function verificarFecha() {

    var fechaTermino = document.getElementById('fechaTermino').value;
    var fechaInicio = document.getElementById('fechaInicio').value;

    if (fechaInicio != "") {
        var fechasInicio = fechaInicio.split("/");
        var fechasTermino = fechaTermino.split("/");

        var inicio = fechasInicio[2].toString() + '-' + fechasInicio[1].toString() + '-' + fechasInicio[0].toString();
        var final = fechasTermino[2].toString() + '-' + fechasTermino[1].toString() + '-' + fechasTermino[0].toString();

        var inicioDate = new Date(inicio);
        var finDate = new Date(final);

        if (inicioDate >= finDate) {
            errorFecha = true;
            banderaRBTN = false;
            $('#fechaTermino').css("border", "2px solid #fd5757");
        }
        else {
            $('#fechaTermino').css("border", "2px solid #5aa91b");
        }
    } else if (fechaTermino != "") {
        $('#fechaTermino').css("border", "2px solid #5aa91b");
    }

}

function habDesBoton() {

    var aux = camposVacios().isCompleto;

}

function enviarForm() {

    var validaciones = camposVacios();

    if (validaciones.isCompleto) {

        var egresadoSelect = document.getElementById('egresadoSelect').value;
        var empresa = document.getElementById('empresa').value;
        var supervisores = $('#supervSelect').val();
        var cargo = document.getElementById('cargo').value;
        var fechaInicio = document.getElementById('fechaInicio').value;
        var fechaTermino = document.getElementById('fechaTermino').value;
        var sueldo = document.getElementById('sueldo').value;
        var pais = document.getElementById('pais').value;
        var inputComunaSelect = document.getElementById('inputComunaSelect').value;
        var listaComunaSelect = document.getElementById('listaComunaSelect').value;

        var arg = {
            "egresadoSelect": egresadoSelect,
            "empresa": empresa,
            "supervisores": supervisores,
            "cargo": cargo,
            "fechaInicio": fechaInicio,
            "fechaTermino": fechaTermino != "" ? fechaTermino : null,
            "sueldo": sueldo,
            "pais": pais,
            "comuna": pais == 'Chile' ? listaComunaSelect : inputComunaSelect
        }

        io.socket.post('/addEmpleo', arg, function (error, data) {

            if (data.statusCode == 200) {

                $('#nombreEgresado').text('');
                $('#apellidoEgresado').text('');
                $('#rutEgresado').text('');
                $('#carreraEgresado').text('');
                $('#ingresoEgresado').text('');
                $('#egresoEgresado').text('');
                $('#titulacionEgresado').text('');

                $('#egresadoSelect').selectpicker('val', '-1');
                $('#empresa').selectpicker('val', '0');
                $('#supervSelect').selectpicker('val', []);
                $("#cargo").val("");
                $("#fechaInicio").val("");
                $("#fechaTermino").val("");
                $("#sueldo").val("0");
                $("#pais").val("0");
                $("#inputComunaSelect").val("");
                $("#listaComunaSelect").val("0");



                $('#egresadoSelect').css("border", "1px solid #ccc");
                $('#empresa').css("border", "1px solid #ccc");
                $('#cargo').css("border", "1px solid #ccc");
                $('#fechaInicio').css("border", "1px solid #ccc");
                $('#fechaTermino').css("border", "1px solid #ccc");
                $('#sueldo').css("border", "1px solid #ccc");
                $('#pais').css("border", "1px solid #ccc");
                $('#inputComunaSelect').css("border", "1px solid #ccc");
                $('#listaComunaSelect').css("border", "1px solid #ccc");

                swal({
                    //title: 'Error!',
                    text: 'Se agrego el empleo con exito',
                    type: 'success',
                    confirmButtonText: 'Entendido',
                })
            }
            else {
                console.log(error);
            }

        });
    }
    else {
        if (validaciones.faltan.length > 0) {

            for (var x = 0; x < validaciones.faltan.length; x++) {
                var id = validaciones.faltan[x];

                switch (id) {
                    case "Egresado":
                        $('#egresadoSelect').css("border", "2px solid #F9BA7B");
                        break;
                    case "Empresa":
                        $('#empresa').css("border", "2px solid #F9BA7B");
                        break;
                    case "Cargo":
                        $('#cargo').css("border", "2px solid #F9BA7B");
                        break;
                    case "Fecha inicio":
                        $('#fechaInicio').css("border", "2px solid #F9BA7B");
                        break;
                    case "Sueldo":
                        $('#sueldo').css("border", "2px solid #F9BA7B");
                        break;
                    case "Pais":
                        $('#pais').css("border", "2px solid #F9BA7B");
                        break;
                    case "Ciudad":
                        $('#inputComunaSelect').css("border", "2px solid #F9BA7B");
                        $('#listaComunaSelect').css("border", "2px solid #F9BA7B");
                        break
                }
            }

            swal({
                //title: 'Error!',
                text: 'Falta completar los siguientes campos: ' + validaciones.faltan,
                type: 'warning',
                confirmButtonText: 'Entendido',
            })
        }
        else {
            if (validaciones.errorFecha == true) {
                swal({
                    //title: 'Error!',
                    text: 'La fecha de termino debe ser mayor a la inicial',
                    type: 'warning',
                    confirmButtonText: 'Entendido',
                })
            }
        }
    }

}


function digitoVerificador(value) {
    var sum = 0;
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


function validarRut() {

    var rut = document.getElementById('rutSup').value;

    if (rut.length === 0 || !rut.trim() || rut == "") {
        $('#errorRutSup').text("");
        $('#rutSup').css("border", "1px solid #ccc");
    }
    else {
        if (/^\d{1,9}-[\d|kK]{1}$/.test(rut)) {
            if (digitoVerificador(rut)) { //RUT CORRECTO
                $('#errorRutSup').text("");
                //$('#rutSup').css("border", "2px solid #5aa91b");
                $('#rutSup').css("border", "2px solid #ccc");
                buscarRutBd(rut);
            }
            else {
                $('#errorRutSup').text("Digito verificador incorrecto.");
                $('#rutSup').css("border", "2px solid #fd5757");
            }
        }
        else {
            $('#errorRutSup').text("Formato incorrecto");
            $('#rutSup').css("border", "2px solid #fd5757");
        }
    }

}


function getEgresadoSelect() {

    var idEgresadoSelect = document.getElementById('egresadoSelect').value;

    var arg = {
        "id_egresado": idEgresadoSelect,
    }


    io.socket.post('/getEgresadoSelect', arg, function (error, data) {

        var resp = data.body

        if (resp.length == 0) {
            $('#nombreEgresado').text('');
            $('#apellidoEgresado').text('');
            $('#rutEgresado').text('');
            $('#carreraEgresado').text('');
            $('#ingresoEgresado').text('');
            $('#egresoEgresado').text('');
            $('#titulacionEgresado').text('');
        }
        else {

            $('#nombreEgresado').text(resp[0].nombre + ' ' + resp[0].apellido);
            $('#apellidoEgresado').text(resp[0].apellido);
            $('#rutEgresado').text(resp[0].rut);
            $('#carreraEgresado').text(resp[0].carrera);
            $('#ingresoEgresado').text(resp[0].año_ingreso);
            $('#egresoEgresado').text(resp[0].año_egreso);
            $('#titulacionEgresado').text(resp[0].año_titulacion);
        }

        habDesBoton();

    });


}

function validarFormSup() {

    var banderaRBTN = true;

    var nombreSup = document.getElementById('nombreSup').value;
    var rut = document.getElementById('rutSup').value;

    if (estadoRutGlobal) {
        banderaRBTN = false;
    }

    if (!tieneLetra(nombreSup)) {
        banderaRBTN = false;
        $('#errorNomSup').text("No puede estar vacio");
        $('#nombreSup').css("border", "2px solid red");
    }
    else {
        $('#errorNomSup').text("");
        //$('#nombreSup').css("border", "2px solid #5aa91b");
        $('#nombreSup').css("border", "2px solid #ccc");
    }


    if (rut.length === 0 || !rut.trim() || rut == "") {
        //$('#errorRutSup').text("testtt");
        $('#rutSup').css("border", "1px solid #ccc");
    }
    else {
        if (/^\d{1,9}-[\d|kK]{1}$/.test(rut)) {
            if (digitoVerificador(rut)) {
                if (estadoRutGlobal) {
                    $('#errorRutSup').text("Este rut ya existe asociado a un supervisor");
                    $('#rutSup').css("border", "2px solid #fd5757");
                }
                else {
                    $('#errorRutSup').text("");
                    $('#rutSup').css("border", "2px solid #ccc");
                }
            }
            else {
                banderaRBTN = false;
                $('#errorRutSup').text("Digito verificador incorrecto.");
                $('#rutSup').css("border", "2px solid #fd5757");
            }
        }
        else {
            banderaRBTN = false;
            $('#errorRutSup').text("Formato incorrecto");
            $('#rutSup').css("border", "2px solid #fd5757");
        }
    }

    if (banderaRBTN) return true;
    else return false;

}


function validarNombreSup() {

    var nombreSup = document.getElementById('nombreSup').value;

    if (!tieneLetra(nombreSup)) {
        $('#errorNomSup').text("No puede estar vacio");
        $('#nombreSup').css("border", "2px solid #fd5757");
    }
    else {
        $('#errorNomSup').text("");
        //$('#nombreSup').css("border", "2px solid #5aa91b");
        $('#nombreSup').css("border", "2px solid #ccc");
    }

}


function setFormSup() {

    $("#nombreSup").val("");
    $("#rutSup").val("");
    $("#correo").val("");
    $("#telefono").val("");
    $("#nota").val("1");

    $('#nombreSup').css("border", "1px solid #ccc");
    $('#rutSup').css("border", "1px solid #ccc");
    $('#correo').css("border", "1px solid #ccc");
    $('#telefono').css("border", "1px solid #ccc");
    $('#nota').css("border", "1px solid #ccc");

}


function buscarRutBd(rut) {

    var arg = {
        "rut": rut
    }

    io.socket.post('/getRutSupervisor', arg, function (error, data) {

        if (data.statusCode == 200) {
            var resp = data.body;
            if (resp.length > 0) {
                swal({
                    //title: 'Error!',
                    text: 'Este rut ya existe asociado a un supervisor',
                    type: 'error',
                    confirmButtonText: 'Entendido',
                })
                //console.log("YA EXISTE");
                $('#errorRutSup').text("Este rut ya existe asociado a un supervisor");
                $('#rutSup').css("border", "2px solid #fd5757");
                estadoRutGlobal = true;
            }
            else {
                //console.log("NADA, SOLO PONER EN PLOMO");
                $('#errorRutSup').text("");
                $('#rutSup').css("border", "2px solid #ccc");
                estadoRutGlobal = false;
            }
        }
        else {
            console.log(error);
        }

    });
}


