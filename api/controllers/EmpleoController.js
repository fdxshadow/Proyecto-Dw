var egresadosGlobal = [];
var empleosGlobal = [];

module.exports = {
    inicio: function (req, res) {

        var queryEgresado = "SELECT * FROM egresado";
        var queryEmpresa = "SELECT * FROM empresa";
        var queryEmpleo = "SELECT * FROM empleo";
        //"SELECT * FROM empleo where id_egresado ='" + req.id_egresado + "'";
        //here id_egresado ='" + req.id_egresado + "'";

        Job.query(queryEgresado, [], function (err, resp) {
            if (err) { return res.serverError(err); }

            var egresados = [];


            for (var x = 0; x < resp.length; x++) {
                cont = x + 1;
                var egresado = {
                    'cont': cont,
                    'id_egresado': resp[x].id_egresado,
                    'nombreRut': resp[x].nombre + ' ' + resp[x].apellido, //+ ' - ' + resp[x].rut + ' - ' + resp[x].carrera
                    'Rut': resp[x].rut,
                    'carrera': resp[x].carrera
                    //'contador': resp[x].count
                }
                egresados.push(egresado);
            };

            egresadosGlobal = resp;

            Job.query(queryEmpresa, [], function (err, resp) {
                if (err) { return res.serverError(err); }
                var empresas = resp;
                queryEmpleo = "SELECT * FROM empleo"; //where id_egresado ='" + 1 + "'";   
                Job.query(queryEmpleo, [], function (err, resp) {
                    if (err) { return res.serverError(err); }
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

    //agregada por ivette NO BORRAR

    getEmpleos: function (req, res) {

        var id = req.body;

        var query = "SELECT DISTINCT emp.nombre, em.pais, em.comuna_ciudad, em.fecha_inicio, em.fecha_termino, em.cargo, em.rango_sueldo FROM egresado as e inner join empleo as em inner join empresa as emp on e.id_egresado = em.id_egresado and emp.id_empresa = em.id_empresa and e.id_egresado=" + id.id;

        //var query = 
        Empleo.query(query, [], function (err, resp) {
            if (err) { return res.serverError(err); }

            return res.json(resp);

        });
    }


};

