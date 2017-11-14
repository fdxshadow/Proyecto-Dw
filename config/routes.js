
module.exports.routes = {

  '/': {
    view: 'homepage'
  },
  
  '/Empresa': 'CompanyController.mostrar',
  'post /Agregar': 'CompanyController.create',
  'get /Eliminar/:id': 'CompanyController.delete',
  'get /Editar/:id': 'CompanyController.edit',
  'get /Ver/:id': 'CompanyController.view',
  'post /Actualizar': 'CompanyController.update',

  '/getSupervisores': 'JobController.getSupervisores',
  '/getEmpleos': 'JobController.getEmpleos',
  'post /getEgresados': 'JobController.getEgresados',
  'post /getEgresadoSelect': 'JobController.getEgresadoSelect',
  '/getEmpresas': 'JobController.getEmpresas',

  'post /addEmpleo': 'JobController.addEmpleo',

  '/addFormSuperv': 'JobController.addFormSuperv',


  '/inicioEmpleos':
  'JobController.inicio',

  '/addSupervisor': {
    view: 'addSupervisor'
  },

  '/addEmpleo': {
    view: 'addEmpleo'
  },
  '/listaEmpleos': {
    view: 'listaEmpleos'
  },

  '/egresados': {
    view: 'egresados'
  }


};
