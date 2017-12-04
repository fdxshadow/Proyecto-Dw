var valida = require('../services/valida.service');

var egresadosGlobal = [];


module.exports = {
    inicio: function (req, res) {

        var queryEgresado = "SELECT * FROM egresado";
        var queryEmpresa = "SELECT * FROM empresa";

        Job.query(queryEgresado, [], function (err, resp) {
            if (err) { return res.serverError(err); }

            var egresados = [];

            for (var x = 0; x < resp.length; x++) {
                var egresado = {
                    'id_egresado': resp[x].id_egresado,
                    'nombreRut': resp[x].nombre + ' ' + resp[x].apellido + ' - ' + resp[x].rut
                }
                egresados.push(egresado);
            }

            egresadosGlobal = resp;


            Job.query(queryEmpresa, [], function (err, resp) {
                if (err) { return res.serverError(err); }

                var empresas = resp;

                Supervisor.find().exec(function (err, supervisores) {
                    if (err) console.log(err);

                    return res.view('inicioEmpleos', {
                        egresados: egresados,
                        empresas: empresas,
                        supervisores: supervisores
                    });
                });
            });

        });

    },

    getEgresadoSelect: function (req, res) {

        var id = req.body.id_egresado;

        var respuesta = [];

        for (var x = 0; x < egresadosGlobal.length; x++) {
            if (egresadosGlobal[x].id_egresado == id) {
                respuesta.push(egresadosGlobal[x]);
            }
        }

        return res.ok(respuesta);

    },

    getEgresados: function (req, res) {

        var arg = req.body;
        var query = "SELECT * FROM egresado where rut ='" + arg.rut + "'";

        Job.query(query, [], function (err, resp) {
            if (err) { return res.serverError(err); }

            return res.ok(resp);

        });
    },


    //VALIDACIONES BACK

    create: function (req, res) {

        var param = req.body;

        if (param.fechaTermino != null) {
            var fechasTermino = param.fechaTermino.split("/");
            var fechaTermino = fechasTermino[2].toString() + '-' + fechasTermino[1].toString() + '-' + fechasTermino[0].toString();
        }
        else fechaTermino = null;

        var supervisores = param.supervisores;

        var sup1 = supervisores[0];
        var sup2 = supervisores.length > 1 ? supervisores[1] : null;
        var sup3 = supervisores.length > 2 ? supervisores[2] : null;

        var fechasInicio = param.fechaInicio.split("/");
        var fechaInicio = fechasInicio[2].toString() + '-' + fechasInicio[1].toString() + '-' + fechasInicio[0].toString();

        var datos = {
            id_egresado: param.egresadoSelect,
            id_empresa: param.empresa,
            id_supervisor1: sup1,
            id_supervisor2: sup2,
            id_supervisor3: sup3,
            fecha_inicio: fechaInicio,
            fecha_termino: fechaTermino,
            pais: param.pais,
            comuna_ciudad: param.comuna,
            cargo: param.cargo,
            rango_sueldo: param.sueldo
        }

        if (fechasTermino != null) {
            if (fechaTermino > fechaInicio) {
                Job.create(datos).exec(function (err, resp) {
                    if (err) { return res.serverError(err); }
                    return res.ok(resp);
                });
            }
            else {
                return res.serverError("La fecha de termino debe ser mayor a la actual");
            }
        } else {

            Job.create(datos).exec(function (err, resp) {
                if (err) { return res.serverError(err); }
                return res.ok(resp);
            });
        }

    },

};

