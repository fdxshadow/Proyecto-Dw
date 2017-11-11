/**
 * JobController
 *
 * @description :: Server-side logic for managing jobs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

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

                var empresas = [];

                var empresa = {
                    'id_empresa': "IDIDID",
                    'nombreRutEspec': "NOMBRESILLO"
                }
                empresas.push(empresa);

                return res.view('inicioEmpleos', {
                    egresados: egresados,
                    empresas: resp
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

    getEmpresas: function (req, res) {

        Job.query('SELECT * FROM empresa', [], function (err, resp) {
            if (err) { return res.serverError(err); }

            return res.ok(resp);

        });
    },

    getSupervisores: function (req, res) {

        Job.query('SELECT * FROM supervisor', [], function (err, resp) {
            if (err) { return res.serverError(err); }

            return res.ok();

        });
    },

    getEmpleos: function (req, res) {

        Job.query('SELECT * FROM egresado as e inner join empleo as em on e.id_egresado = em.id_egresado', [], function (err, resp) {
            if (err) { return res.serverError(err); }

            return res.ok();

        });
    },

    addEmpleo: function (req, res) {

        var param = req.body;

        if (param.fechaTermino != null) {
            var fechasTermino = param.fechaTermino.split("/");
            var fechaTermino = fechasTermino[2].toString() + '-' + fechasTermino[1].toString() + '-' + fechasTermino[0].toString();
        }
        else fechaTermino = null;


        var fechasInicio = param.fechaInicio.split("/");
        var fechaInicio = fechasInicio[2].toString() + '-' + fechasInicio[1].toString() + '-' + fechasInicio[0].toString();

        var query = "INSERT INTO empleo VALUES(null,'" + param.egresadoSelect + "', ' " + param.empresa + "' ,null,null,null,'" + fechaInicio + "', '" + fechaTermino + "' ,'" + param.pais + "','" + param.comuna + "','" + param.cargo + "','" + param.sueldo + "')";

        Job.query(query, [], function (err, resp) {
            if (err) { return res.serverError(err); }

            return res.ok(resp);
        });
        //return res.ok();
    },

    addFormSuperv: function (req, res) {

        var param = req.body;
        var query = "INSERT INTO `supervisor` VALUES (null,'" + param.rutSup + "' ,'" + param.nombreSup + "','" + param.correo + "','" + param.telefono + "','" + param.nota + "')";

        Job.query(query, [], function (err, resp) {
            if (err) { return res.serverError(err); }

            return res.ok(resp);
        });

        //res.send("ok");
    }
};

