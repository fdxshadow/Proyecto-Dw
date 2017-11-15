let createQuery = "insert into egresado (nombre,apellido,rut,año_ingreso,año_egreso,año_titulacion,carrera,postgrado,area_postgrado,sat_carrera,nota_carrera,cv,linkedin,nec_cap) values (",
    readQuery = "select * from egresado;",
    readByIdQuery = "select * from egresado where id_egresado = ",
    updateQuery = "update egresado set ",   //UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
    deleteQuery = "delete from egresado where id_egresado = ";

module.exports = {

    showList:function (req,res) {
        Egresado.query(readQuery,[],function(err,egresados){
            if(err) return res.serverError(err);
            return res.view('egresados',{
                egresados: egresados
            });
        });
    },
    createEgresado:function (req,res) {
        req.body.nombre = "\"" + req.body.nombre + "\"";
        req.body.apellido = "\"" + req.body.apellido + "\"";
        req.body.rut = "\"" + req.body.rut + "\"";
        req.body.egreso = "\"" + req.body.egreso + "\"";
        req.body.ingreso = "\"" + req.body.ingreso + "\"";
        req.body.titulacion = req.body.titulacion===""?"NULL":"\"" + req.body.titulacion + "\"";
        req.body.carrera = req.body.carrera==="1"?"\"Ejecucion\"":req.body.carrera==="2"?"\"Informatica\"":"\"Civil\"";
        req.body.postgrado = req.body.postgrado===""?"NULL":"\"" + req.body.postgrado + "\"";
        req.body.a_postgrado = req.body.a_postgrado===undefined?"NULL":req.body.a_postgrado==="1"?"\"Informatica\"":req.body.a_postgrado==="2"?"\"Negocio\"":"\"Desconocida\"";
        req.body.satisfaccion = req.body.satisfaccion===""?"NULL":"\"" + req.body.satisfaccion + "\"";
        req.body.nota = req.body.nota===""?"NULL":req.body.nota;
        req.body.cv = req.body.cv===""?"NULL":"\"" + req.body.cv + "\"";
        req.body.linkedin = req.body.linkedin===""?"NULL":"\"" + req.body.linkedin + "\"";
        req.body.capacitacion = req.body.capacitacion===""?"NULL":"\"" + req.body.capacitacion + "\"";
        let query = createQuery + 
                    req.body.nombre + "," +
                    req.body.apellido + "," +
                    req.body.rut + "," +
                    req.body.ingreso + "," +
                    req.body.egreso + "," +
                    req.body.titulacion + "," +
                    req.body.carrera + "," +
                    req.body.postgrado + "," +
                    req.body.a_postgrado + "," +
                    req.body.satisfaccion + "," +
                    req.body.nota + "," +
                    req.body.cv + "," +
                    req.body.linkedin + "," +
                    req.body.capacitacion + 
                    ");";
        Egresado.query(query, [], function (err, resp) {
            if (err) return res.serverError(err);
            return res.redirect('/egresados');
        });
    },
    readEgresadoById:function(req,res){
        let query = readByIdQuery + req.param('id') + ";";
        Egresado.query(query,[],function(err,egresado){
            if(err) return res.serverError(err);
            return res.send(egresado);
        });
    },
    updateEgresado:function(req,res){

    },
    deleteEgresado:function (req,res) {
        let query = deleteQuery + req.param('id') + ";";
        Egresado.query(query, [], function (err,resp){
            if (err) return res.serverError(err);
            return res.redirect("/egresados");
        });
    }
    
};