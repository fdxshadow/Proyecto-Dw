
##################################################
###  		Documentación de hito 1 - Empleos           ### 
##################################################


Para llegar a esta parte del flujo del proyecto se
requiere recibir los valores de Empresa, supervisor
y rut del egresado, los cuales se pueden ir a buscar 
directamente a la base de datos y mostrarlo para 
luego seleccionar uno (en el caso de la empresa), y
el campo rut del empleado, el cual se debe validar 
que exista en la base de datos.

Estos datos están fuera del alcance del módulo 
Empleos.

Se entrega la lista de los empleados con su correspodiente empleo (empresa, la ubicación, fecha de inicio,
término, cargo, supervisor, y sueldo). La que se res-
cata de la base datos según los campos ingresados
anteriormente en éste módulo.



##################################################
#  Documentación de hito 1 - Empresas 
##################################################
## Documentación: Hito 1 módulo empresas
El api se define en el documento routes.js del directorio config, cada uno haciendo referencia a determinados métodos ubicados en el documento CompanyController.js ubicado en el directorio controllers

### ‘/Empresa':'CompanyController.mostrar',
#### Método
```js
mostrar:function(req,res){
		Company.find(function foundCompany (err, companys) {
                if(err) console.log(err);
                return res.view('Empresa',{
                  companys: companys
                });
              });		
	},
  ```
#### Datos de entrada:
No tiene datos de entrada
Datos de salida
Html con la vista de la gestión de empresa	
### 'post /Agregar': 'CompanyController.create',
Método
```js
create:function (req,res) {
		Company.create(req.params.all(), function companyCreated(err, company) {
                  if (err) console.log(err);
                  res.redirect('/'); 
                });
		
	},
```
#### Datos de entrada:
Los datos son recibidos a través de req.params 
Entrada	Descripción
name	Nombre de la empresa
rut	Rut de la empresa
item	El rubro de operación
priority	La prioridad que se le da a la empresa
country	El país de origen de la empresa
speciality	La(s) especialidad(es) de operación de la empresa

#### Datos de salida
Retorna a la página principal	

### 'get /Eliminar/:id':'CompanyController.delete',
#### Método
```js
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
```
#### Datos de entrada:
El dato es recibidos a través de req.params y es referente a la id de la empresa que se desea eliminar.
Datos de salida
#### Retorna a la página principal	


### 'get /Editar/:id':'CompanyController.edit',
#### Método
```js
edit:function(req,res){
		var id = req.param('id');

		Company.find(id,function(err,company){
			if(err) return res.send(err);
			else {
				return res.view('editar',{company:company});

			}

		}) 

	},
```
#### Datos de entrada:
El dato es recibidos a través de req.params y es referente a la id de la empresa que se desea modificar.
#### Datos de salida
Retorna el archivo html con la vista en la cual se permite editar los datos de la empresa solicitada.	



### 'get /Ver/:id':'CompanyController.view',
#### Método
```js
view:function(req,res){
		var id = req.param('id');

		Company.find(id,function(err,company){
			if(err) return res.send(err);
			else {
				return res.view('ver',{company:company});

			}

		}) 

	},
```
#### Datos de entrada:
El dato es recibidos a través de req.params y es referente a la id de la empresa que se desea examinar.
#### Datos de salida
Retorna el archivo html con la vista en la cual se permite ver los datos de la empresa solicitada.	

### 'post /Actualizar':'CompanyController.update’
#### Método
```js
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
```
#### Datos de entrada:
Los datos son recibidos a través de req.params, en este caso serán usados para reemplazar los datos de la empresa identificada por un id. 
Entrada	Descripción
name	Nombre de la empresa
rut	Rut de la empresa
item	El rubro de operación
priority	La prioridad que se le da a la empresa
country	El país de origen de la empresa
speciality	La(s) especialidad(es) de operación de la empresa

#### Datos de salida
Retorna a la página principal	
