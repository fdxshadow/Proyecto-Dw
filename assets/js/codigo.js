$(document).ready(function () {

    $('#listaComuna').hide();
    $('#inputComuna').show();
    $('#myModal').on('show.bs.modal', function (evnt) {

        var nombre = $(evnt.relatedTarget).val();
        $('#empleadoSelect').text(nombre);
    });




    $('.texto').datepicker({
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
    var fechaTermino = document.getElementById('fechaTermino').value;
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
    }else{
        
            rut = rut.replace('-','')
    rut = rut.replace(/\./g,'')
    var suma = 0;
    var caracteres = "1234567890kK";
    var contador = 0;    
    for (var i=0; i < rut.length; i++){
        u = rut.substring(i, i + 1);
        if (caracteres.indexOf(u) != -1)
        contador ++;
    }
    if ( contador==0 ) { return false }
    
    var rut1 = rut.substring(0,rut.length-1)
    var drut = rut.substring( rut.length-1 )
    var dvr = '0';
    var mul = 2;
    
    for (i= rut1.length -1 ; i >= 0; i--) {
        suma = suma + rut1.charAt(i) * mul
                if (mul == 7)   mul = 2
                else    mul++
    }
    res = suma % 11
    if (res==1)     dvr = 'k'
                else if (res==0) dvr = '0'
    else {
        dvi = 11-res
        dvr = dvi + ""
    }
    if ( dvr != drut.toLowerCase() ) {
        swal({
            //title: 'Error!',
            text: 'Rut inválido ',
            type: 'warning',
            confirmButtonText: 'Entendido',
        })
     return false; }
    //else { return true; }

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
