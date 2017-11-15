/**
 * EgresadoController
 *
 * @description :: Server-side logic for managing egresadoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


var rut = require('../services/rut');

module.exports = {
    getEgresados: function(req, res) {
        Egresado.find().exec(function(err, egresados) {
            return res.send(egresados);
        });
    },
    getEgresadosbyId: function(req, res) {
        console.log(req.param);
        var param = {
            id_egresado: req.param('id')
        };
        Egresado.findOne(param).exec(function(err, egresado) {
            return res.send(egresado);
        });
    },
    createEgresado: function(req, res) {
        var egresadoData = req.body;
        Egresado.find({
            "rut": req.body.rut
        }).exec(function(err, collection) {
            if (collection.length > 0) {
                err = new Error('RUT ya existe');
                res.status(400);
                return res.send({
                    reason: err.toString()
                })
            } else {
                Egresado.create(egresadoData, function(err, egresado) {
                    if (err) {
                        res.status(400);
                        return res.send({
                            reason: err.toString()
                        })
                    }
                    res.send(egresado);
                })
            }
        });
    },

    updateEgresado: function(req, res) {
        var egresadoData = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            rut: req.body.rut,
            año_ingreso: req.body.año_ingreso,
            año_egreso: req.body.año_egreso,
            año_titulacion: req.body.año_titulacion,
            carrera: req.body.carrera,
            postgrado: req.body.postgrado,
            area_postgrado: req.body.area_postgrado,
            sat_carrera: req.body.sat_carrera,
            nota_carrera: req.body.nota_carrera,
            Cv: req.body.Cv,
            linkedin: req.body.linkedin,
            nec_cap: req.body.nec_cap
        };
        var id_egresado = req.body.id_egresado;

        if (!rut.isFormatValid(egresadoData.rut)) {
            res.status(400);
            return res.send({
                reason: "Error: Ingrese RUT sin puntos y con guión"
            })
        } else if (!rut.isDigitValid(egresadoData.rut)) {
            res.status(400);
            return res.send({
                reason: "Error: Dígito Verificador incorrecto"
            })
        }
        console.log(egresadoData);
        console.log(id_egresado);
        Egresado.update({
            "id_egresado": id_egresado
        }, egresadoData).exec(function(err) {
            if (err) {
                res.status(400);
                return res.send({
                    reason: err.toString()
                })
            }
            res.status(204);
            res.end();
        });

    },
    deleteEgresadobyId: function(req, res) {
        console.log(req.param);
        var param = {
            id_egresado: req.param('id')
        };
        Egresado.destroy(param).exec(function(err, egresado) {
            return res.send(egresado);
        });
    }

};
