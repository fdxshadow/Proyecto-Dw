$(document).ready(function () {

    $('#listaComuna').hide();
    $('#inputComuna').hide();
    $('#myModal').on('show.bs.modal', function (evnt) {

        var nombre = $(evnt.relatedTarget).val();
        $('#empleadoSelect').text(nombre);


    });

    $('#fechaInicio').datepicker({
        language: "es",
        format: "dd/mm/yyyy"
    });

    $('#fechaTermino').datepicker({
        language: "es",
        format: "dd/mm/yyyy"
    });

});

function getPais() {
    var valor = document.getElementById("pais").value;
    if (valor == 8) {
        $('#inputComuna').hide();
        $('#listaComuna').show();
    }
    else {
        $('#listaComuna').hide();
        $('#inputComuna').show();
    }
}

function cambiarPanel() {
    var opcion = document.getElementById("opcion").value;
    if (opcion == 1) {
        var url = "/addEmpleo";
        $(location).attr('href', url);
    }
    else if (opcion == 2) {
        var url = "/listaEmpleos";
        $(location).attr('href', url);
    }

}

function validarCampos() {
    var nombre = document.getElementById('nombre').value;
    var rut = document.getElementById('rut').value;
    var empresa = document.getElementById('empresa').value;
    var cargo = document.getElementById('cargo').value;
    var fechaInicio = document.getElementById('fechaInicio').value;
    var sueldo = document.getElementById('sueldo').value;
    var pais = document.getElementById('pais').value;
    var inputComunaSelect = document.getElementById('inputComunaSelect').value;
    var listaComunaSelect = document.getElementById('listaComunaSelect').value;

    console.log("pais", pais);

    console.log("inputComuna", inputComunaSelect);

    var banderaRBTN = false;

    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        swal({
            //title: 'Error!',
            text: 'Falta completar el campo Nombre ',
            type: 'warning',
            confirmButtonText: 'Entendido',
        })
        return false;
    }

    if (rut == null || rut.length == 0) {
        //alert('ERROR: Debe ingresar un rut');
        swal({
            //title: 'Error!',
            text: 'Falta completar el campo Rut ',
            type: 'warning',
            confirmButtonText: 'Entendido'
        })
        return false;
    }

    if (empresa == 0) {
        //alert('ERROR: Debe seleccionar empresa');
        swal({
            //title: 'Error!',
            text: 'Falta completar el campo Empresa ',
            type: 'warning',
            confirmButtonText: 'Entendido'
        })
        return false;
    }

    if (cargo == null || cargo.length == 0 || /^\s+$/.test(cargo)) {
        //alert('ERROR: El campo cargo no debe ir vacío o lleno de solamente espacios en blanco');
        swal({
            //title: 'Error!',
            text: 'Falta completar el campo Cargo ',
            type: 'warning',
            confirmButtonText: 'Entendido'
        })
        return false;
    }

    if (fechaInicio == null || fechaInicio.length == 0) {
        //alert('ERROR: El campo fechaInicio no debe ir vacío ');
        swal({
            //title: 'Error!',
            text: 'Falta completar el campo Fecha inicio ',
            type: 'warning',
            confirmButtonText: 'Entendido'
        })
        return false;
    }

    if (sueldo == null || sueldo == 0) {
        //alert('ERROR: El campo sueldo no debe ir vacío ');
        swal({
            //title: 'Error!',
            text: 'Falta completar el campo Sueldo ',
            type: 'warning',
            confirmButtonText: 'Entendido'
        })
        return false;
    }

    if (pais == 0 || pais == null) {
        //alert('ERROR: El campo pais no debe ir vacío ');
        swal({
            //title: 'Error!',
            text: 'Falta completar el campo Pais ',
            type: 'warning',
            confirmButtonText: 'Entendido'
        })
        return false;
    }


    if (pais == 8) {
        if (listaComunaSelect == null || listaComunaSelect == 0) {
            //alert('ERROR: El campo listaComunaSelect no debe ir vacio ');
            swal({
                //title: 'Error!',
                text: 'Falta completar el campo Comuna ',
                type: 'warning',
                confirmButtonText: 'Entendido'
            })
            return false;
        }
    } else if (pais != 0) {
        if (inputComunaSelect == null || inputComunaSelect.length == 0 || /^\s+$/.test(inputComunaSelect)) {
            //alert('ERROR: El campo inputComunaSelect no debe ir vacio ');
            swal({
                //title: 'Error!',
                text: 'Falta completar el campo Comuna ',
                type: 'warning',
                confirmButtonText: 'Entendido',
            })
            return false;
        }
    }

    //swal("Good job!", "You clicked the button!", "success");
    return true;
}
