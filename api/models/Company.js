/**
 * Company.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  
  	
	autoCreatedAt: false,
	autoUpdatedAt: false,
  
  connection: 'someMysqlServer',
  tableName: 'empresa',
  
  attributes: {
    id_empresa:{
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },
  	nombre:{
  	  type: 'string'
    },
    rut:{
      type: 'string'
    },
    rubro:{
      type: 'string'
    },
    prioridad:{
      type: 'integer'
    },
    pais_origen:{
      type: 'string'
    },
    especialidad:{
      type: 'string',
      enum: ['software', 'base de datos', 'redes'],
      defaultsTo: 'Sin Asignar'
    }
  }
};

