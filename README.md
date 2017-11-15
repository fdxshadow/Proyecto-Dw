# Documentación API Módulo de Egresados

El siguiente documento contiene el detalle del funcionamiento
del módulo de sistema de Egresos de la Escuela de Ingeniería Civil en
Informática de la Universidad de Valparaíso.

·
## Introducción

Este módulo de la aplicación Web está destinada a la recompilación
de datos sobre los individuos egresados de la Escuela de Ingeniería
Civil en Informática de la Universidad de Valparaíso. A continuación
se explicarán el funcionamiento del envío y recibo de datos por parte
del módulo. 

## Funcionamiento

Para el envío de datos, se ejecuta la acción del botón 'Ingresar Egresado',
el cuál abre una ventana con un formulario con los siguientes aspectos a rellenar:

> + [Nombre]
> + [Apellido]
> + [RUT]
> + [Año Ingreso]
> + [Año Egreso]
> + [Año de Titulación]
> + [Carrera]
> + [C.V]
> + [Necesidad Capacitación]
> + [Satisfación con la Carrera]
> + [Nota de Satisfacción con la Carrera]
> + [Linkedin]
> + [Postgrado]
> + [Area de Postgrado]

Tanto para 'Nombre' y 'Apellido', se validan a través de 'data-validate' [Función de JQuery Validate].

Ya para el campo 'RUT' se creó una función para validar llamada 'rutFormato', el cuál se encarga de
asegurar que lo ingresado pertenezca tanto a los digitos '1-9' y eventualmente la letra 'K' y otra
función llamada 'rutDigitoVerificador', en donde se rectifica que el dígito ingresado sea válido
para el formulario.|

Posteriormente para los campos 'Año Ingreso', 'Año Egreso', 'Año Titulación', 'Carrera' y 'Postgrado'
no son validados para el formulario.

En el 'Area de Postgrado', el módulo necesita validar este campo, por lo que se creó la función 'postgrado'
que habilita las opciones de campó de postgrado.

Finalmente, los campos 'Satisfacción con la Carrera', 'Nota Satisfacción', 'Curriculum Vitae', 'Linkedin' y 'Necesidad Capacitación' no
son necesarios para la validación, lo que implica que, finalmente el formulario está completado y listo para poder enviar con la función 'POST'.


##################################################
###  		Documentación de hito 1 - Empleos.          ### 
##################################################

##agregar de test

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
