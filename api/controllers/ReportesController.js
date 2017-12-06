let valida = require('../services/valida.service');

var filasReporte1 = [
    {
        'rubro' : 'enseñanza',
        'especialidad': 'software',
        'cantidad': '10'
    },
    {
        'rubro' : 'enseñanza',
        'especialidad': 'base de datos',
        'cantidad': '20'
    },
    {
        'rubro' : 'enseñanza',
        'especialidad': 'redes',
        'cantidad': '30'
    },
    {
        'rubro' : 'enseñanza',
        'especialidad': 'sin asignar',
        'cantidad': '40'
    },
    {
        'rubro' : 'construccion',
        'especialidad': 'software',
        'cantidad': '10'
    },
    {
        'rubro' : 'construccion',
        'especialidad': 'base de datos',
        'cantidad': '20'
    },
    {
        'rubro' : 'construccion',
        'especialidad': 'redes',
        'cantidad': '30'
    },
    {
        'rubro' : 'construccion',
        'especialidad': 'sin asignar',
        'cantidad': '40'
    }
];

var filasReporte2 = [
    {
        'egresadoNombre' : "Juan",
        'egresadoApellido': "Garcia",
        "empresaNombre": "empresa1",
        "empresaRubro": "rubro1"
    },
    {
        'egresadoNombre' : "Diego",
        'egresadoApellido': "Fernandez",
        "empresaNombre": "empresa2",
        "empresaRubro": "rubro2"
    },
    {
        'egresadoNombre' : "Felipe",
        'egresadoApellido': "Soto",
        "empresaNombre": "empresa3",
        "empresaRubro": "rubro4"
    }
];

let createQuery = "insert into egresado (nombre,apellido,rut,año_ingreso,año_egreso,año_titulacion,carrera,postgrado,area_postgrado,sat_carrera,nota_carrera,cv,linkedin,nec_cap) values (",
    readQuery = "select * from egresado;",
    readByIdQuery = "select * from egresado where id_egresado = ",
    updateQuery = "update egresado set ",   //UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
    deleteQuery = "delete from egresado where id_egresado = ";

module.exports = {

    reporte1:function (req,res) {
        Egresado.query(readQuery,[],function(err,egresados){
            if(err) return res.serverError(err);
            return res.view('reporte1',{
                filas: filasReporte1
            });
        });
    },
    reporte5:function (req,res) {
        Egresado.query(readQuery,[],function(err,egresados){
            if(err) return res.serverError(err);
            return res.view('reporte5',{
                filas: filasReporte2
            });
        });
    },
};
