/**
 * CompanyController
 *
 * @description :: Server-side logic for managing companys
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create:function (req,res) {
		Company.create(req.params.all(), function companyCreated(err, company) {
                  if (err) console.log(err);
                  res.redirect('/'); 
                });
		
	},
	mostrar:function(req,res){
		Company.find(function foundCompany (err, companys) {
                if(err) console.log(err);
                return res.view('Empresa',{
                  companys: companys
                });
              });		
	},
	delete:function(req,res){
		var id = req.param('id');
		if (!id) return res.send("No id.",500);

		Company.find(id, function foundCompany(err, company) {
			if (err) return res.send(err,500);
			if (!company) return res.send("No existe empresa",404);

			Company.destroy(id, function companyDestroyed(err) {
				if (err) return res.send(err,500);

				return res.redirect('/');
			});
			
		})
	},

	edit:function(req,res){
		var id = req.param('id');

		Company.find(id,function(err,company){
			if(err) return res.send(err);
			else {
				return res.view('editar',{company:company});

			}

		}) 

	},

	view:function(req,res){
		var id = req.param('id');

		Company.find(id,function(err,company){
			if(err) return res.send(err);
			else {
				return res.view('ver',{company:company});

			}

		}) 

	},

	update:function(req,res){
		var param = req.params.all();
		var id = param.id;
		Company.update(id,param,function(err,company){
			if(err) return res.send(err);
			else{

				return res.redirect('/');

			}

		});
	}
	
};

