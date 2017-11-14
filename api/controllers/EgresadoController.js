/**
 * EgresadoController
 *
 * @description :: Server-side logic for managing egresadoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    let createQuery = "insert into egresado values (",
        readQuery = "select * from egresado;",
        readByIdQuery = "select * from egresado where id_egresado = ",
        updateQuery = "update egresado set ",   //UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
        deleteQuery = "delete from egresado where id_egresado = ";  //DELETE FROM table_name WHERE condition;
        
    createEgresado:function (req,res) {

    },
    readEgresados:function(req,res){

    },
    readEgresadoById:function(req,res){

    },
    updateEgresado:function(req,res){

    },
    deleteEgresado:function (req,res) {

    }
    
};