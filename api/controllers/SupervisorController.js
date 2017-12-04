var valida = require('../services/valida.service');

module.exports = {

    getSupervisores: function (req, res) {
        Supervisor.find().exec(function (err, supervisores) {
            if (err) console.log(err);

            return res.send(supervisores);
        });
    },


    //VALIDACIONES BACK

    addSupervisor: function (req, res) {

        var datos = req.body;

        var param = {
            nombre: datos.nombreSup,
            rut: datos.rutSup,
            correo: datos.correo,
            telefono: datos.telefono,
            nota: datos.nota
        }

        var status = valida.validaRut(datos.rutSup); //valida RUT con el servicio

        if (status.value == 1) { //esta correcto
            Supervisor.create(param).exec(function (err, data) {
                if (err) res.serverError (err);
                res.send(data);
            });
        }
        else {
            res.serverError(status.mensaje);
        }

    },

    buscarRut: function (req, res) {

        var rut = req.body.rut;
        Supervisor.find({ rut: rut }).exec(function (err, supervisorRut) {
            if (err) {
                return res.serverError(err);
            }
            return res.send(supervisorRut);
        });
    },

};

