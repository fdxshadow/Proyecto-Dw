
module.exports.routes = {


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
  'post /addEmpleo': 'JobController.create',
  
  'post /getSupervisores': 'SupervisorController.getSupervisores',
  'post /buscarRut': 'SupervisorController.buscarRut',
  'post /addFormSuperv': 'SupervisorController.addSupervisor',
  'post /getEmpleos': 'EmpleoController.getEmpleos',
  '/listaEmpleos': 'EmpleoController.inicio',
  'post /empleos/create' : 'JobController.create',
  '/addSupervisor': { view: 'addSupervisor'},
  '/addEmpleo': { view: 'addEmpleo'},

  //FIN MODULO EMPLEOS

  '/': { view: 'homepage' },
  '/egresados':'EgresadoController.showList',
  '/egresados/create':'EgresadoController.createEgresado',
  '/egresados/readById/:id':'EgresadoController.readEgresadoById',
  '/egresados/update/:id':'EgresadoController.updateEgresado',
  '/egresados/delete/:id':'EgresadoController.deleteEgresado',

//MODULO REPORTE

  '/graficoEmpEgr': { view:'graficoEmpleoEgresado' },


//MODULO GRÁFICO

};
