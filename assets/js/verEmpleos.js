function getEmpleoSelect(id) {

    var arg = {
        "id": id
    }

    io.socket.post('/getEmpleos', arg, function (error, data) {

        if (data.statusCode == 200) {

            var datos = data.body;
            var n = 0;
            $("#tablaModal tbody tr").each(function () {
                n++;
            });

            for (i = 0; i < n; i++) {
                $("#tablaModal tbody tr:eq('" + 1 + "')").remove();
            };
            addFilas(datos);

        }
        else {
            console.log(error);
        }

    });

}

function addFilas(datos) {

    console.log("DATOS", datos);

    var d = '';
    for (var i = 0; i < datos.length; i++) {
        d += '<tr>' +
            '<td>' + datos[i].nombre + '</td>' +
            '<td>' + datos[i].pais + '</td>' +
            '<td>' + datos[i].comuna_ciudad + '</td>' +
            '<td>' + datos[i].fecha_inicio + '</td>' +
            '<td>' + datos[i].fecha_termino + '</td>' +
            '<td>' + datos[i].cargo + '</td>' +
            '<td>' + datos[i].rango_sueldo + '</td>' +
            '</tr>';
    }

    $("#tablaModal").append(d);
    $('#myModal').modal('show');

}
