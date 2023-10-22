use('BibliotecaPublica');

//PRIMERA PARTE: Sub-Consultas CRUD
//insertOne: Insertamos un documento en la colección Trabajadores.
/*db.Trabajadores.insertOne(
    {
      Puesto: 'Bibliotecario/a',
      Informacion: {
        Nombre: 'Gabriela',
        Apellido: 'Lopez',
        Edad: 33,
        Nacionalidad: 'Argentina'
      },
      Editorial: ['Media Naranja','Planeta VLL'],
    }
);

//insertMany: Insertamos 20 documento en la colección Trabajadores.
db.Trabajadores.insertMany([
{"Puesto":"Asistente de Biblioteca","Informacion":{"Nombre":"Marnia","Apellido":"Renvoys","Edad":97,"Nacionalidad":"Myanmar"},"Editorial":["Pearson","Pan Macmillan"]},
{"Puesto":"Archivista","Informacion":{"Nombre":"Sherline","Apellido":"Steffans","Edad":61,"Nacionalidad":"Guatemala"},"Editorial":["Media Naranja"]},
{"Puesto":"Bibliotecario de Niños y Jóvenes","Informacion":{"Nombre":"Von","Apellido":"Loosmore","Edad":89,"Nacionalidad":"Japan"},"Editorial":["Penguin Random House","Candlewick Press"]},
{"Puesto":"Bibliotecario de Adquisiciones","Informacion":{"Nombre":"Lorettalorna","Apellido":"Borne","Edad":33,"Nacionalidad":"Indonesia"},"Editorial":["Quirk Books","Cambridge University Press"]},
{"Puesto":"Bibliotecario de Referencia","Informacion":{"Nombre":"Collete","Apellido":"Cheales","Edad":84,"Nacionalidad":"China"},"Editorial":["Lonely Planet.","Macmillan Publishers"]},
{"Puesto":"Bibliotecario de Tecnología de la Información","Informacion":{"Nombre":"Kellby","Apellido":"Whaites","Edad":20,"Nacionalidad":"United States"},"Editorial":["Wiley"]},
{"Puesto":"Bibliotecario de Catalogación","Informacion":{"Nombre":"Beth","Apellido":"Danett","Edad":86,"Nacionalidad":"China"},"Editorial":["National Geographic Society","Schott Music"]},
{"Puesto":"Bibliotecario de Catalogación","Informacion":{"Nombre":"Breanne","Apellido":"Joannidi","Edad":95,"Nacionalidad":"Philippines"},"Editorial":["Oxford University Press"]},
{"Puesto":"Bibliotecario/a","Informacion":{"Nombre":"Valeda","Apellido":"Frayn","Edad":27,"Nacionalidad":"Morocco"},"Editorial":["Springer","HarperCollins"]},
{"Puesto":"Bibliotecario de Adquisiciones","Informacion":{"Nombre":"Albrecht","Apellido":"Dionisetti","Edad":56,"Nacionalidad":"Cuba"},"Editorial":["Candlewick Press"]},
{"Puesto":"Bibliotecario de Referencia","Informacion":{"Nombre":"Freddie","Apellido":"McElory","Edad":95,"Nacionalidad":"China"},"Editorial":["Schott Music","Hachette Livre"]},
{"Puesto":"Asistente de Biblioteca","Informacion":{"Nombre":"Erminia","Apellido":"Yaneev","Edad":32,"Nacionalidad":"Russia"},"Editorial":["Simon & Schuster","Bloomsbury"]},
{"Puesto":"Bibliotecario de Referencia","Informacion":{"Nombre":"Abbe","Apellido":"Willmore","Edad":27,"Nacionalidad":"France"},"Editorial":["Scholastic","Hachette Livre"]},
{"Puesto":"Bibliotecario de Adquisiciones","Informacion":{"Nombre":"Horst","Apellido":"Trett","Edad":25,"Nacionalidad":"Ukraine"},"Editorial":["Springer"]},
{"Puesto":"Bibliotecario de Niños y Jóvenes","Informacion":{"Nombre":"Leone","Apellido":"Ferentz","Edad":87,"Nacionalidad":"Philippines"},"Editorial":["Cambridge University Press"]},
{"Puesto":"Gerente de la Biblioteca","Informacion":{"Nombre":"Damiano","Apellido":"Happer","Edad":50,"Nacionalidad":"United States"},"Editorial":["Pearson"]},
{"Puesto":"Bibliotecario de Tecnología de la Información","Informacion":{"Nombre":"Laurel","Apellido":"Callendar","Edad":92,"Nacionalidad":"Ukraine"},"Editorial":["HarperCollins"]},
{"Puesto":"Gerente de la Biblioteca","Informacion":{"Nombre":"Tildie","Apellido":"Sibthorpe","Edad":61,"Nacionalidad":"Colombia"},"Editorial":["Quirk Books","Cambridge University Press"]},
{"Puesto":"Bibliotecario de Tecnología de la Información","Informacion":{"Nombre":"Trefor","Apellido":"Carmont","Edad":60,"Nacionalidad":"China"},"Editorial":["Media Naranja","Scholastic Corporation"]},
{"Puesto":"Asistente de Biblioteca","Informacion":{"Nombre":"Sherri","Apellido":"Hurkett","Edad":84,"Nacionalidad":"Lithuania"},"Editorial":["Macmillan Publishers","Bloomsbury"]}
]);*/

//findOne: Mostrar al trabajadores de nacionalidad china
//db.Trabajadores.findOne({'Informacion.Nacionalidad':'China'});

//find: Mostrar a los trabajadores que tienen 23 o más años.
//db.Trabajadores.find({'Informacion.Edad':{$gte: 23}});

/*updateOne: Actualizar el apellido de un trabajador cuyo 
puesto es 'Bibliotecario de Referencia'.*/
// db.Trabajadores.updateOne(
//     {Puesto: 'Bibliotecario de Referencia'},
//     {$set:{'Informacion.Apellido':'Goméz'}}
// );

/*updateMany: Actualizar la edad de todos los trabajadores 
cuyo puesto es 'Bibliotecario de Adquisiciones'.*/
// db.Trabajadores.updateMany(
//     {Puesto: 'Bibliotecario de Adquisiciones'},
//     {$set:{'Informacion.Edad': 25}}
// );

/*deleteOne: Eliminar al trabajador que cuya editorial 
se llame 'Media Naranja' y que este en la posicion 0.*/
//db.Trabajadores.deleteOne({'Editorial.0':'Media Naranja'});

/*deleteMany: Eliminar a todos los trabajadores de 
nacionalidad 'Philippines'.*/
//db.Trabajadores.deleteMany({'Informacion.Nacionalidad':'Philippines'});

//SEGUNDA PARTE: Indice simple - Indice compuesto

//Indice simple
//Este indice permite encontrar de forma rapido los 'Puestos de trabajo'.
//db.Trabajadores.createIndex({ Puesto: 1 }, { name: 'PuestosDeTrabajo' })

//Imprime el indicador de forma descendente.
//db.Trabajadores.find({},{ Puesto:1 }).sort({ Puesto: -1 }).pretty()

//Indice compuesto
/*Este indice acelera las consultas que involucren búsquedas 
o clasificaciones basadas en los campos "Informacion.Nombre" 
y "Informacion.Apellido" de los documentos en la colección 
"Trabajadores".*/
// db.Trabajadores.createIndex( {'Informacion.Nombre': 1, 
// 'Informacion.Apellido' : 1},{name: 'NombreCompletoTrabajador'} );

//Imprime el documento del trabajador cuyo Nombre es 
//'Horst' y Apellido es 'Trett'.
// db.Trabajadores.find({'Informacion.Nombre': 'Horst', 
// 'Informacion.Apellido':'Trett'}).pretty()

//TERCERA PARTE: Agregaciones.

//Match
/*Se mostraran solo los documentos con los que queremos 
trabajar, en este caso solo trabajaremos con los trabajadores 
de Nacionalidad: United States*/
// db.Trabajadores.aggregate([
//   { $match : { 'Informacion.Nacionalidad' : 'United States' } }
// ]).pretty()

//Project
/*Esta consulta se utiliza para seleccionar y mostrar 
estos campos particulares de los documentos en la 
colección "Trabajadores".*/
// db.Trabajadores.aggregate([
//   { $project : { _id : 0, 'Informacion.Nombre' : 1, 
//   'Informacion.Apellido' : 1, Editorial : 1 } }
// ]).pretty()

//Group
/* Se filtran los documentos donde el campo 'Informacion.Edad' 
sea menor o igual a 30. Luego, contamos cuántos documentos 
cumplen con esta condición y almacenamos el resultado 
en un campo llamado "MenorTreinta".*/
// db.Trabajadores.aggregate([
//   {$match: {'Informacion.Edad': { $lte: 30 } }},
//   {$group: {_id: null, MenorTreinta : { $sum: 1 }}}
// ]).pretty()

//Out
/*Se agrupa los documentos en la colección "Trabajadores" por 
el campo "Puesto" y cuenta cuántos documentos hay en cada grupo. 
Luego, almacena los resultados en una nueva colección llamada 
"PuestosDeTrabajo"  */
// db.Trabajadores.aggregate([
//   { $group : { _id : '$Puesto', TotalDocs : { $sum : 1 } } },
//   { $out : 'PuestosDeTrabajo' }
// ])
// db.PuestosDeTrabajo.find().pretty()

//Unwind
/* Filtra los trabajadores cuyo puesto es 'Bibliotecario de 
Referencia' y sub-dividide la informacion del arreglo 
"Informacion".*/
// db.Trabajadores.aggregate([
//   { $match : { Puesto : 'Bibliotecario de Referencia' } },
//   { $unwind : '$Informacion' }
// ]).pretty()

//Sort
/* Se filtrarán los Trabajadores con el puesto 'Bibliotecario 
de Tecnología de la Información', descompondrá el campo 
"Informacion" en documentos separados, proyectará solo los 
nombres y apellidos, y los ordenará alfabéticamente por nombre 
de manera descendente. */
// db.Trabajadores.aggregate([
//   { $match : { Puesto : 'Bibliotecario de Tecnología de la Información' } },
//   { $unwind : '$Informacion' },
//   { $project : { _id : 0, 'Informacion.Nombre' : 1, 'Informacion.Apellido' : 1} },
//   { $sort : { 'Informacion.Apellido' : -1 } }
// ]).pretty()

//Limit
/*Se obtendran los nombres, apellidos y edades de los dos 
asistentes de biblioteca más jóvenes de la colección 
"Trabajadores". */
// db.Trabajadores.aggregate([
//   { $match : { Puesto : 'Asistente de Biblioteca' } },
//   { $unwind : '$Informacion' },
//   { $project : { _id : 0, 'Informacion.Nombre' : 1, 
//   'Informacion.Apellido' : 1, 'Informacion.Edad' : 1 } },
//   { $sort : { 'Informacion.Edad' : 1 } },
//   { $limit : 2 }
// ]).pretty()

//Add Fields
/*Se utiliza para encontrar y marcar a los bibliotecarios 
de referencia que tienen 27 años de edad asignándoles un 
nuevo campo "Paga" con un valor de 550. */
// db.Trabajadores.aggregate([
//   { $match : {Puesto: 'Bibliotecario de Referencia',
//   'Informacion.Edad': { $eq: 27 } } },
//   { $addFields : { Paga : 550 } }
// ]).pretty()

//Actualiza la base de datos.
// db.Trabajadores.updateMany(
//   { Puesto: 'Bibliotecario de Referencia',
// 'Informacion.Edad': { $eq: 27 } } ,
// { $set: { Paga : 550  }}
// );

//Count
/*Se contaran el numero de documentos que hay en el arreglo de 
Editorial y al final se arrojara una consulta con el resultado.*/ 
// db.Trabajadores.aggregate([
//   { $unwind : '$Editorial' },
//   { $count : 'TotalDocumentos' }
// ]).pretty()
  
//Lookup
/*Se buscaran trabajadores asociados a la editorial 'Cambridge 
University Press' y luego agrega información de los libros 
publicados por esa editorial en la matriz 'Libros' en el resultado. 
El resultado final mostrará los trabajadores y los libros
 asociados a la editorial 'Cambridge University Press'.*/
// db.Trabajadores.aggregate([
//   { $match: { Editorial: 'Cambridge University Press' } },
//   { $project: { _id: 0, Editorial: 1, Titulo: 1 } },
//   {
//     $lookup: {
//       from: 'Libros',
//       localField: 'Titulo', 
//       foreignField: 'editorial',
//       as: 'Libros',
//     },
//   },
// ]).pretty()


//SortByCount
//Se mostrara el numero de personas que tienen la misma nacionalidad.
// db.Trabajadores.aggregate([
//   { $sortByCount : '$Informacion.Nacionalidad' }
// ]).pretty()
