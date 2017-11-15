$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url: 'api/egresados',
    dataType: 'json',
    success: function(response) {
      console.log(response);
      var trHTML;
      $.each(response, function(i, item) {
        trHTML += '<tr id="row'+item.id_egresado+'">'
        + '<td>' + item.nombre + '</td>'
        + '<td>' + item.apellido +'</td>'
        + '<td>' + 'corre@correo.cl' + '</td>'
        + '<td><a ihref="#" onClick="showEgresado(' + item.id_egresado + ')"><i class="fa fa-search fa-lg"></a></td>'
        + '<td><i class="fa fa-pencil fa-lg"></td>'
        + '<td><a ihref="#" onClick="eliminarEgresado(' + item.id_egresado + ')"><i class="fa fa-trash-o fa-lg"></a></td>'
        + '</tr>';
      });
      $('#tabla-egresados').append(trHTML);
    }
  });



  $("select[name=postgrado]").change(function() {
    var postgrado = $(this).val();

    if (postgrado == '') {
      $("select[name=a_postgrado]").attr("disabled", true);
    } else {
      $("select[name=a_postgrado]").removeAttr("disabled");

    }
  });

  $('i').hover(function() {
    $(this).css('cursor', 'pointer');
  });
  $('#elimnar').click(function(event) {
    swal({
      title: '¿Estás seguro?',
      text: "No podrás revertir ésto!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger'
    }).then(function() {
      swal(
        'Eliminado!',
        'Se ha eliminado un egresado',
        'success'
      )
    }, function(dismiss) {
      if (dismiss === 'cancel') {
        swal(
          'Cancelado',
          'No se ha eliminado',
          'error'
        )
      }
    })
  });



  $.formUtils.addValidator({
    name: 'rutFormato',
    validatorFunction: function(value, $el, config, language, $form) {
      return /^\d{1,9}-[\d|kK]{1}$/.test(value);
    },
    errorMessage: "Formato incorrecto",
    errorMessageKey: 'badRutFormat'
  });

  $.formUtils.addValidator({
    name: 'rutDigitoVerificador',
    validatorFunction: function(value, $el, config, language, $form) {
      var sum = 0;
      for (i = (value.length - 3), mul = 0; i >= 0; i--, mul++) {
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
    },
    errorMessage: "Digito Verificador Incorrecto",
    errorMessageKey: 'badRutDV'
  });

  $.validate({
    form: '#formulario-egresados',
    lang: 'es',
    modules: 'html5, date'
  });



});

function showEgresado(id_egresado) {
  $('#detalle').modal('toggle');

  $.ajax({
    type: 'GET',
    url: 'api/egresados/' + id_egresado,
    dataType: 'json',
    success: function(response) {
      var ulHTML = '<li>Nombre: '+ response.nombre +' ' + response.apellido +
      '</li><li>Rut: '+response.rut+'</li>' +
      '</li><li>Año Ingreso: '+response.año_ingreso+
      '</li><li>Año Egreso: '+response.año_egreso+
      '</li><li>Año Titulación: '+response.año_titulacion+
      '</li><li>Carrera: '+response.carrera+
      '</li><li>Nota Carrera: '+response.nota_carrera+
      '</li><li>Linkedin:'+ response.linkedin +
      '</li><li>Postagrado:' + response.postgrado+
      '</li><li>Área de postgrado:'+response.area_postgrado+
      '</li>';
      $('#ul-modal-ver').html(ulHTML);
    }
  });
}

function eliminarEgresado(id_egresado){
  swal({
      title: '¿Estás seguro?',
      text: "No podrás revertir ésto!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
    }).then(function() {
      $.ajax({
        type: 'delete',
        url: 'api/egresados/' + id_egresado,
        success: function(response){
          console.log('#row'+id_egresado);
          $('#row'+id_egresado).hide();
          swal(
            'Eliminado!',
            'Se ha eliminado un egresado',
            'success'
          );
        }
      });
    }, function(dismiss) {
      if (dismiss === 'cancel') {
        swal(
          'Cancelado',
          'No se ha eliminado',
          'error'
        );
      }
    });
  }
