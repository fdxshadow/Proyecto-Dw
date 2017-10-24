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
      var sum = 0,
          mul = 2;
      for(i = (value.length - 3) ; i >= 0; i--) {
        sum = sum + value.charAt(i) * mul;
        mul = (mul == 7) ? 2 : mul++;
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
