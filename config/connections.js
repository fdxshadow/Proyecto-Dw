
module.exports.connections = {


  localDiskDb: {
    adapter: 'sails-disk'
  },

  someMysqlServer: {
    adapter: 'sails-mysql',
    host: 'localhost',
    user: 'root', //optional
    password: '12Gra:2014', //optional
    database: 'prodw' //optional
  },


};
