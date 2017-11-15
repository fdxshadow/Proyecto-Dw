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
  	  type: 'string',
  	  required: true
    },
    rut:{
      type: 'string',
      required: true
    },
    rubro:{
      type: 'string',
      required: true
    },
    prioridad:{
      type: 'float',
      required: true
    },
    pais_origen:{
      type: 'string',
      required: true
    },
    especialidad:{
      type: 'string',
      enum: ['software', 'base de datos', 'redes'],
      defaultsTo: 'Sin Asignar',
      required: true
    }
  }
};

