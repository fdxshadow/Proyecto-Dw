
var egresadosGlobal = [];
var empleosGlobal = [];

module.exports = {
    inicio: function (req, res) {

        var queryEgresado = "SELECT * FROM egresado";
        var queryEmpresa = "SELECT * FROM empresa";
        var queryEmpleo = "SELECT * FROM empleo";
        //"SELECT * FROM empleo where id_egresado ='" + req.id_egresado + "'";
         //here id_egresado ='" + req.id_egresado + "'";
         console.log(req.id_egresado);
         Job.query(queryEgresado, [], function (err, resp) {
            if (err) { return res.serverError(err); }

            var egresados = [];
            

            for (var x = 0; x < resp.length; x++) {
                cont = x+1;
                var egresado = {
                    'cont': cont,
                    'id_egresado': resp[x].id_egresado,
                    'nombreRut': resp[x].nombre + ' ' + resp[x].apellido, //+ ' - ' + resp[x].rut + ' - ' + resp[x].carrera
                    'Rut' : resp[x].rut,
                    'carrera': resp[x].carrera
                    //'contador': resp[x].count
                }
                egresados.push(egresado);
            };

            egresadosGlobal = resp;

            Job.query(queryEmpresa, [], function (err, resp) {
                if (err) { return res.serverError(err); }
                var empresas = resp;
            queryEmpleo =  "SELECT * FROM empleo"; //where id_egresado ='" + 1 + "'";   
            Job.query(queryEmpleo,[], function(err, resp){
                if(err) {return res.serverError(err);}
                var empleos = [];
                /*for (var x = 0; x < resp.length; x++) {
                    var cont = x+1;
                    var empleo = {
                        'cont' : cont,
                        'id_empleo': resp[x].id_empleo,
                        'pais' : resp[x].pais,
                        'comuna_ciudad' : resp[x].comuna_ciudad,
                        'fecha_inicio' : resp[x].fecha_inicio,
                        'fecha_termino' : resp[x].fecha_termino,
                        'cargo' : resp[x].cargo,
                        'rango_sueldo': resp[x].rango_sueldo
                        //'Rut' : resp[x].rut,
                        //'carrera': resp[x].carrera
                        //'contador': resp[x].count
                    }

                    empleos.push(empleo);
                };*/
                Job.query('SELECT * FROM supervisor ', [], function (err, resp) {
                    if (err) { return res.serverError(err); }

                    return res.view('listaEmpleos', {
                        egresados: egresados,
                        empresas: empresas,
                        //empleos: empleos,
                        supervisores: resp
                    });
                
                });
            });
        });
        });



    },

    getEgresadoSelect: function (req, res) {

        var id = 1;

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
    getEmpleoSelect: function (req, res) {
		var empleos = [];
        var id = req.id_egresado;
        var respuesta = [];
        for (var x = 0; x < empleosGlobal.length; x++) {
            if (empleosGlobal[x].id_egresado == id) {
            	var cont = x+1;
				var empleo = {
				'cont' : cont,
				'id_empleo': resp[x].id_empleo,
				'pais' : resp[x].pais,
				'comuna_ciudad' : resp[x].comuna_ciudad,
				'fecha_inicio' : resp[x].fecha_inicio,
				'fecha_termino' : resp[x].fecha_termino,
				'cargo' : resp[x].cargo,
				'rango_sueldo': resp[x].rango_sueldo
				}
				empleos.push(empleo);
                respuesta.push(empleosGlobal[x]);
            }
        }

        //return res.view('listaEmpleos', {
         //               empleos: empleos,});
         return res.ok(respuesta);


    },

    getEmpleos: function (req, res) {
        var arg = req.body;
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
