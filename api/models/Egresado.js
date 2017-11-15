/**
 * Egresado.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoCreatedAt: false,
  autoUpdatedAt: false,

  connection: 'someMysqlServer',
  tableName: 'egresado',

  attributes: {
    id_egresado:{
      type:'integer',
      autoIncrement: true,
      primaryKey: true
    },
    nombre:{
        type:'string',
      required:true
    },
    apellido:{
        type:'string',
      required:true
    },
    rut:{
        type: 'string',
      required:true,
      unique:true
    },
    año_ingreso:{
      type:'integer',
      required:true
    },
    año_egreso:{
        type:'integer',
      required:true
    },
    año_titulacion:{
        type:'integer'
    },
    carrera:{
        type:'string',
      enum: ['ejecucion', 'informatica', 'civil'],
      required:true
    },
    postgrado:{
        type:'string',
      enum: ['magister', 'doctorado']
    },
    area_postgrado:{
        type:'string'
    },
    sat_carrera:{
        type:'string'
    },
    nota_carrera:{
        type:'float'
    },
    Cv:{
      type:'string',
      defaultsTo:'miArchivo'
    },
    linkedin:{
        type:'string'
    },
    nec_cap:{
        type:'string'
    }
  }

};

