module.exports.connections = {
  localDiskDb: {
    adapter: 'sails-disk'
  },
  someMysqlServer: {
    adapter:  'sails-mysql',
    host:     'localhost',
    user:     'root', //optional
    password: 'root', //optional
    database: 'egresados' //optional
  },

};
