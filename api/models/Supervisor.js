
module.exports = {
  
  	
	autoCreatedAt: false,
	autoUpdatedAt: false,
  
  connection: 'someMysqlServer',
  tableName: 'supervisor',
  
  attributes: {
    id_supervisor:{
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },
  	rut:{
  	  type: 'string',
      required: true,
      unique: true
    },
    nombre:{
      type: 'string',
      required: true,
    },
    correo:{
      type: 'string',
      required: true
    },
    telefono:{
      type: 'integer',
      required: true
    },
    nota:{
      type: 'float',
      required: true
    }
  }
};

