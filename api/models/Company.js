/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name:{
  	  type: 'string'
    },

    rut:{
      type: 'string'
    },
    
    item:{
      type: 'string'
    },
    
    priority:{
      type: 'string'
    },
    
    country:{
      type: 'string'
    },
    specialty:{
      type: 'string'
    }
  }
};

