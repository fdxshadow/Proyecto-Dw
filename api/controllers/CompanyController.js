
var valida = require('../services/valida.service');


module.exports = {

	mostrar: function (req, res) {
		Company.find().exec(function (err, companys) {
			if (err) console.log(err);
			return res.view('Empresa', {
				companys: companys
			});
		});
	},
	//ok
	create: function (req, res) {

		var statusNota = valida.validarDecimal(req.param('prioridad'));
		var statusRut = valida.validaRut(req.param('rut'));

		// var statusNota = valida.validarDecimal(3.2);
		// var statusRut = valida.validaRut('19152972-3');

		if (isNaN(statusNota)) {
			res.serverError("Formato de la prioridad no admitido");
		}
		else {
			if (statusRut.value == 1) { //esta correcto rut

				var param = {
					nombre: req.param('nombre'),
					rut: req.param('rut'),
					rubro: req.param('rubro'),
					prioridad: req.param('prioridad'),
					pais_origen: req.param('pais_origen'),
					especialidad: req.param('especialidad')
				}
				Company.create(param).exec(function (err, company) {
					if (err) console.log(err);
					res.redirect('/Empresa');
				});

			}
			else {
				res.serverError(statusRut.mensaje); //rut incorrecto
			}
		}

	},

	delete: function (req, res) {
		var id = req.param('id');
		if (!id) return res.send("No id.", 500);
		Company.find(id, function foundCompany(err, company) {
			if (err) return res.send(err, 500);
			if (!company) return res.send("No existe empresa", 404);

			Company.destroy(id, function companyDestroyed(err) {
				if (err) return res.send(err, 500);

				return res.redirect('/Empresa');
			});

		})
	},

	view: function (req, res) {
		var id = req.param('id');
		Company.find(id, function (err, company) {
			if (err) return res.send(err);
			else {
				return res.view('ver', { company: company });
			}
		})
	},
	//ok
	//ok
	edit: function (req, res) {
		var param = {
			id_empresa: parseInt(req.param('id'))
		};
		Company.findOne(param).exec(function (err, company) {
			console.log(err);
			if (err) return res.send(err);
			else {
				return res.view('editar', { company: [company] });
			}
		})
	},
	update: function (req, res) {

		var statusNota = valida.validarDecimal(req.param('prioridad'));
		var statusRut = valida.validaRut(req.param('rut'));

		if (isNaN(statusNota)) {
			res.serverError("Formato de la prioridad no admitido");
		}
		else {
			if (statusRut.value == 1) { //esta correcto rut

				Company.update(
					{ id_empresa: parseInt(req.param('id_empresa')) },
					{
						nombre: req.param('nombre'),
						rut: req.param('rut'),
						rubro: req.param('rubro'),
						prioridad: req.param('prioridad'),
						pais_origen: req.param('pais_origen'),
						especialidad: req.param('especialidad')
					}
				).exec(function (err, company) {
					console.log(company)
					console.log(err)
					if (err) return res.send(err);
					else {
						return res.redirect('/Empresa');
					}
				});

			}
			else {
				res.serverError('Error en el RUT: ' + statusRut.mensaje); //rut incorrecto
			}
		}

	},

};
