
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

  //MODULO EMPLEOS

  '/inicioEmpleos': 'JobController.inicio',
  'post /getEgresados': 'JobController.getEgresados',
  'post /getEgresadoSelect': 'JobController.getEgresadoSelect',
  'post /getRutSupervisor': 'SupervisorController.buscarRut',
  'post /addEmpleo': 'JobController.addEmpleo',
  '/listaEmpleos':'EmpleoController.inicio',
  'post /getSupervisores': 'SupervisorController.getSupervisores',
  'post /addSup': 'SupervisorController.addSupervisor',
  'post /buscarRut': 'SupervisorController.buscarRut',
  'post /addFormSuperv': 'SupervisorController.addSupervisor',
  'post /getEmpleos': 'EmpleoController.getEmpleos',
  '/listaEmpleos': 'EmpleoController.inicio',

  '/addSupervisor': {
    view: 'addSupervisor'
  },

  '/addEmpleo': {
    view: 'addEmpleo'
  },

  //FIN MODULO EMPLEOS

  '/egresados': {
    view: 'egresados'
  },


};
