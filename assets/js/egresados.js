$(document).ready(function() {
  $("select[name=postgrado]").change(function(){
    var postgrado = $(this).val();

    if(postgrado == '')
    {
      $("select[name=a_postgrado]").attr("disabled", true);
    }
    else
    {
      $("select[name=a_postgrado]").removeAttr("disabled");

    }
  });

  	$('i').hover(function() {
        $(this).css('cursor','pointer');
    });
    $('.fa-trash-o').click(function(event){
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
      }).then(function () {
        swal(
          'Eliminado!',
          'Se ha eliminado un egresado',
          'success'
        )
      }, function (dismiss) {
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
    name : 'rutFormato',
    validatorFunction : function(value, $el, config, language, $form) {
      return /^\d{1,9}-[\d|kK]{1}$/.test(value);
    },
    errorMessage : "Formato incorrecto",
    errorMessageKey: 'badRutFormat'
  });

  $.formUtils.addValidator({
    name : 'rutDigitoVerificador',
    validatorFunction : function(value, $el, config, language, $form) {
      var sum = 0;
      for(i=(value.length-3),mul=0;i>=0;i--,mul++){
        sum+=value.charAt(i)*((mul)%6+2);
      }
      digito  = 11 - (sum % 11);
      if(digito == 11){
        return (value.slice(-1) == '0');
      } else if(digito == 10){
        return (value.slice(-1).toLowerCase() == 'k');
      } else {
        return (value.slice(-1) == digito);
        }
      },
    errorMessage : "Digito Verificador Incorrecto",
    errorMessageKey: 'badRutDV'
  });

  $.validate({
    form: '#formulario-egresados',
    lang: 'es',
    modules: 'html5, date'
  })
});
