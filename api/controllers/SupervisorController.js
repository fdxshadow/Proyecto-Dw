
module.exports = {

    getSupervisores: function (req, res) {
        Supervisor.find().exec(function (err, supervisores) {
            if (err) console.log(err);

            return res.send(supervisores);
        });
    },

    addSupervisor: function (req, res) {

        var datos = req.body;
        var param = {
            //id_supervisor: ,
            nombre: datos.nombreSup,
            rut: datos.rutSup,
            correo: datos.correo,
            telefono: datos.telefono,
            nota: datos.nota
        }

        Supervisor.create(param).exec(function (err, data) {
            if (err) console.log(err);
            res.send(data);
        });

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

