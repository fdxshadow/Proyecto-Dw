module.exports = {
  
  	
	autoCreatedAt: false,
	autoUpdatedAt: false,
  
  connection: 'someMysqlServer',
  tableName: 'empleo',
  
  attributes: {
    id_empleo:{
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
    },
  	id_egresado:{
  	  type: 'integer',
      required: true,
    },
    id_empresa:{
      type: 'integer',
      required: true,
    },
    id_supervisor1:{
      type: 'integer',
      required: true
    },
    id_supervisor2:{
      type: 'integer',
    },
    id_supervisor3:{
      type: 'integer',
    },
    fecha_inicio:{
      type: 'date',
      required: true
    },
    fecha_termino:{
      type: 'date',
    },
    pais:{
      type: 'string',
      required: true
    },
    comuna_ciudad:{
      type: 'string',
      required: true
    },
    cargo:{
      type: 'string',
      required: true
    },
    rango_sueldo:{
      type: 'string',
      required: true
    },
  }
};


