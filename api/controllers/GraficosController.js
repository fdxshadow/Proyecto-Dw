/**
 * GraficosController
 *
 * @description :: Server-side logic for managing graficos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	trabajo: function (req,res) {
		var queryA = "SELECT count(*) as c1 FROM egresado WHERE id_egresado = ANY (select id_egresado from empleo)";
		var queryB = "SELECT count(*) as c2 FROM egresado WHERE id_egresado NOT IN (select id_egresado from empleo);";
		// body...
		
		Graficos.query(queryA, [], function (err, resp) {
            if (err) { return res.serverError(err);} 

            	var contrabajo = resp[0].c1;

            	Graficos.query(queryB, [], function (err,resp){
					 if (err) { return res.serverError(err);} 
					 var sintrabajo = resp[0].c2;
					 var trabajo = {
					 	'cont': contrabajo,
					 	'sint': sintrabajo,
					 };
					 sails.log(trabajo);
					 return res.ok(trabajo);
					 //return res.view('graficoEmpleoEgresado', {trabajo:trabajo});
					
            	});


            	



            });
        
	},

};

