
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
  'get /api/egresados': 'EgresadoController.getEgresados',
  'get /api/egresados/:id': 'EgresadoController.getEgresadosbyId',
  'post /api/egresados': 'EgresadoController.createEgresado',
  'put /api/egresados': 'EgresadoController.updateEgresado',
  'delete /api/egresados/:id': 'EgresadoController.deleteEgresadobyId',


};
