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
function eliminar(id){
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
    document.location = "/egresados/delete/"+id;
  }, function (dismiss) {
    if (dismiss === 'cancel')
      swal(
        'Cancelado',
        'No se ha eliminado',
        'error'
      );
  });
}
function ver(id){
  $.get("/egresados/readById/"+id, function(data) {
    data[0].año_ingreso = (new Date(data[0].año_ingreso)).toLocaleDateString();
    data[0].año_egreso = (new Date(data[0].año_egreso)).toLocaleDateString();
    data[0].año_titulacion = data[0].año_titulacion!==null?(new Date(data[0].año_titulacion)).toLocaleDateString():" -";
    data[0].postgrado = data[0].postgrado!==null?data[0].postgrado:" -";
    data[0].area_postgrado = data[0].area_postgrado!==null?data[0].area_postgrado:" -";
    data[0].sat_carrera = data[0].sat_carrera!==null?data[0].sat_carrera:" -";
    data[0].cv = data[0].cv!==null?data[0].cv:" -";
    data[0].linkedin = data[0].linkedin!==null?data[0].linkedin:" -";
    data[0].nec_cap = data[0].nec_cap!==null?data[0].nec_cap:" -";
    $("span[name='verNombre']").each(function(){
      $(this).html(data[0].nombre + " " + data[0].apellido);
    });
    $("span[name='verRut']").html(data[0].rut);
    $("span[name='verIngreso']").html(data[0].año_ingreso);
    $("span[name='verEgreso']").html(data[0].año_egreso);
    $("span[name='verTitulacion']").html(data[0].año_titulacion);
    $("span[name='verCarrera']").html(data[0].carrera);
    $("span[name='verPostgrado']").html(data[0].postgrado);
    $("span[name='verAreaPostgrado']").html(data[0].area_postgrado);
    $("span[name='verSatisfaccion']").html(data[0].sat_carrera);
    $('#notaFix').barrating('set',data[0].nota_carrera);
    $('#notaFix').barrating('readonly',true);
    $("span[name='verCV']").html(data[0].cv);
    $("span[name='verLinkedin']").html(data[0].linkedin);
    $("div[name='verCapacitacion']").css({overflow:"auto",height:"80px"});
    $("div[name='verCapacitacion'] span").html(data[0].nec_cap);
  });
}
function formModal(id){
  if(id===-1){
    $("#tituloFormModal").html("Nuevo egresado");
    $("#formulario-egresados").trigger("reset");
  }else
    $.get("/egresados/readById/"+id, function(data) {
      $("#tituloFormModal").html(data[0].nombre + " " + data[0].apellido);
      data[0].año_ingreso = (new Date(data[0].año_ingreso)).toLocaleDateString();
      data[0].año_egreso = (new Date(data[0].año_egreso)).toLocaleDateString();
      data[0].año_titulacion = data[0].año_titulacion!==null?(new Date(data[0].año_titulacion)).toLocaleDateString():" -";
      data[0].carrera = data[0].carrera==="Ejecucion"?1:data[0].carrera==="Informatica"?2:3;
      data[0].postgrado = data[0].postgrado==="Magister"?1:data[0].postgrado==="Doctorado"?2:0;
      data[0].area_postgrado = data[0].area_postgrado!==null?data[0].area_postgrado:" -";
      data[0].sat_carrera = data[0].sat_carrera!==null?data[0].sat_carrera:" -";
      data[0].cv = data[0].cv!==null?data[0].cv:" -";
      data[0].linkedin = data[0].linkedin!==null?data[0].linkedin:" -";
      data[0].nec_cap = data[0].nec_cap!==null?data[0].nec_cap:" -";
      $("#nombre").val(data[0].nombre);
      $("#apellido").val(data[0].apellido);
      $("#rut").val(data[0].rut);
      //$("#ingreso").val(data[0].año_ingreso);
      //$("#egreso").val(data[0].año_egreso);
      //$("#titulacion").val(data[0].año_titulacion);
      $("#carrera").val(data[0].carrera);
      $("#postgrado").val(data[0].postgrado);
      //$("#a_postgrado").val(data[0].area_postgrado);
      $("#satisfaccion").val(data[0].sat_carrera);
      $('#nota').barrating('set',data[0].nota_carrera);
      ////$("#cv").val("chi lavolaita.pdf");
      //$("#linkedin").val(data[0].linkedin);
      $('#capacitacion').val(data[0].nec_cap);
    });
}