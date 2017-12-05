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
      type:'date',
      required:true
    },
    año_egreso:{
    	type:'date',
      required:true
    },
    año_titulacion:{
    	type:'date'
    },
    carrera:{
    	type:'string',
      enum: ['Ejecucion', 'Informatica', 'Civil'],
      required:true
    },
    postgrado:{
    	type:'string',
      enum: ['Magister', 'Doctorado']
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