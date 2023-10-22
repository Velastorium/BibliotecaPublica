use('BibliotecaPublica');

//PRIMERA PARTE: Sub-Consultas CRUD
//InsertOne: Insertamos un documento en la colección Usuarios.
/*db.Usuarios.insertOne(
    {
    Nombre: 'Catalina',
    Apellido: 'Arango',
    Edad: 15,
    Telefono: 34567876543,
    Correo: 'CataArango@gmail.com',
    Libros: ['100 años de soledad','Boulevard'],
      Precio: 20,
    }
);

//insertMany: Insertamos 20 documento en la colección Usuarios.
db.Usuarios.insertMany([
{"Nombre":"Laurel","Apellido":"Gleadle","Edad":92,"Telefono":36380985359,"Correo":"lgleadle0@imdb.com","Libros":["Crimen y castigo","Matar a un elefante","Los juegos del hambre","Los miserables"],"Precio":235},
{"Nombre":"Stacy","Apellido":"Wroath","Edad":53,"Telefono":28897746959,"Correo":"swroath1@spiegel.de","Libros":["Los juegos del hambre","Siddhartha","En busca del tiempo perdido","El alquimista"],"Precio":51},
{"Nombre":"Mitchel","Apellido":"Climo","Edad":37,"Telefono":70498429821,"Correo":"mclimo2@marketwatch.com","Libros":["Cien años de soledad"],"Precio":8},
{"Nombre":"Gayla","Apellido":"Tidder","Edad":54,"Telefono":97344706929,"Correo":"gtidder3@alexa.com","Libros":["Los pilares de la Tierra"],"Precio":17},
{"Nombre":"Izaak","Apellido":"MacSporran","Edad":23,"Telefono":66710675726,"Correo":"imacsporran4@addtoany.com","Libros":["El retrato de Dorian Gray","Cazadores de microbios","El cuaderno de Noah","Cien años de soledad","Crimen y castigo"],"Precio":162},
{"Nombre":"Darb","Apellido":"Newgrosh","Edad":84,"Telefono":40025944513,"Correo":"dnewgrosh5@so-net.ne.jp","Libros":["Harry Potter y la piedra filosofal","El lector"],"Precio":22},
{"Nombre":"Gabbey","Apellido":"Stiffell","Edad":28,"Telefono":82777416279,"Correo":"gstiffell6@mtv.com","Libros":["La sombra del viento","El amor en los tiempos del cólera"],"Precio":98},
{"Nombre":"Agata","Apellido":"Giabuzzi","Edad":68,"Telefono":48525706108,"Correo":"agiabuzzi7@europa.eu","Libros":["Cien años de soledad","Los detectives salvajes","El Gran Gatsby"],"Precio":88},
{"Nombre":"Maurine","Apellido":"Bothams","Edad":46,"Telefono":55917302220,"Correo":"mbothams8@go.com","Libros":["El principito","Sapiens: De animales a dioses"],"Precio":326},
{"Nombre":"Wat","Apellido":"Gerlts","Edad":56,"Telefono":41839421718,"Correo":"wgerlts9@ucoz.ru","Libros":["Los hombres me explican cosas","Lo que el viento se llevó","El hombre en busca de sentido"],"Precio":141},
{"Nombre":"Deanna","Apellido":"Percy","Edad":41,"Telefono":94312720182,"Correo":"dpercya@typepad.com","Libros":["La carretera","Los hombres me explican cosas","Don Quijote de la Mancha"],"Precio":439},
{"Nombre":"Chiquita","Apellido":"Smiz","Edad":57,"Telefono":88189212232,"Correo":"csmizb@ft.com","Libros":["1984","Harry Potter y la piedra filosofal","1984","Los juegos del hambre","Lo que el viento se llevó"],"Precio":487},
{"Nombre":"Vasily","Apellido":"Bostick","Edad":96,"Telefono":14473737867,"Correo":"vbostickc@rediff.com","Libros":["El hombre en busca de sentido","El psicoanalista","Harry Potter y la piedra filosofal","El principito"],"Precio":12},
{"Nombre":"Haskell","Apellido":"Venditti","Edad":42,"Telefono":66225069567,"Correo":"hvendittid@feedburner.com","Libros":["Cien años de soledad","En busca del tiempo perdido","1984","El Gran Diseño"],"Precio":481},
{"Nombre":"Teodor","Apellido":"Payler","Edad":88,"Telefono":14885425030,"Correo":"tpaylere@pinterest.com","Libros":["Los miserables","Rayuela","El Gran Diseño","El niño con el pijama de rayas"],"Precio":289},
{"Nombre":"Koren","Apellido":"Cuppleditch","Edad":51,"Telefono":60325921661,"Correo":"kcuppleditchf@tinyurl.com","Libros":["Harry Potter y la piedra filosofal","Orgullo y prejuicio","El Gran Diseño","Las aventuras de Sherlock Holmes"],"Precio":248},
{"Nombre":"Duff","Apellido":"Cartwight","Edad":100,"Telefono":2837927764,"Correo":"dcartwightg@uol.com.br","Libros":["Historia de dos ciudades","El cuaderno de Noah"],"Precio":311},
{"Nombre":"Nevile","Apellido":"Steely","Edad":75,"Telefono":3115124929,"Correo":"nsteelyh@edublogs.org","Libros":["Un mundo feliz","El código Da Vinci","Rayuela"],"Precio":438},
{"Nombre":"Andros","Apellido":"Brewin","Edad":80,"Telefono":11885526564,"Correo":"abrewini@cyberchimps.com","Libros":["Siddhartha","Moby-Dick","El lector","Orgullo y prejuicio","Los detectives salvajes"],"Precio":10},
{"Nombre":"Bent","Apellido":"Claussen","Edad":42,"Telefono":67496230690,"Correo":"bclaussenj@amazon.co.jp","Libros":["Los hombres que no amaban a las mujeres","El niño con el pijama de rayas","Matar a un elefante","Un mundo feliz"],"Precio":359}
]);*/

/*findOne: Mostrar un usuario que en los libros que se llevo, 
este 'Lo que el viento se llevó'.*/
//db.Usuarios.findOne({Libros:'Lo que el viento se llevó'});

/*find: Mostrar a los usuarios que tienen menos de 50 y 
que el precio es menor o igual a 200.*/
//db.Usuarios.find({Edad:{$lt:50},Precio:{$lte:200}});

/*updateOne: Actualizar un usuario por su apellido y 
reemplazar el array libro-posicion 1 por 
'Cazadores de sombras: Ciudad de huesos'.*/
// db.Usuarios.updateOne(
//     {Apellido: 'Venditti'},
//     {$set:{'Libros.1':'Cazadores de sombras: Ciudad de huesos'}}
// );

/*updateMany: Actualizar los usuarios que tenga en el array libros-posicion 
2 'Percy Jackson', siempre y cuando su edad sea menor o igual a 34.*/
// db.Usuarios.updateMany(
//     { Edad: { $lte:34} },
//     { $set: { 'Libros.2': 'Percy Jackson' } }
// );

/*deleteOne: Eliminar al usuario que tenga en el array Libros-posicion 1 
'Sapiens: De animales a dioses'.*/
//db.Usuarios.deleteOne({'Libros.1':'Sapiens: De animales a dioses'});

/*deleteMany: Eliminar a todos los usuarios que en el array libros 
tengan 'Cien años de soledad'.*/
//db.Usuarios.deleteMany({'Libros':'Cien años de soledad'});

//SEGUNDA PARTE: Indice simple - Indice compuesto 

//Indice simple
/*Este indice permite encontrar de forma rapido los 
'libros que compraron los usuarios'.*/
//db.Usuarios.createIndex({'Libros': 1 }, { name: 'Libros_Comprados' });

//Mostrar el contenido del indice 'Libros'.
//db.Usuarios.find({}, {'Libros': 1 }).pretty();

//Indice compuesto
/*Este indice acelera las consultas que involucren búsquedas o 
clasificaciones basadas en los campos Nombre, Apellido, Telefono 
y Correo de los documentos en la colección "Usuarios".*/
// db.Usuarios.createIndex( {Nombre: 1, Apellido: 1, Telefono: 1, 
//     Correo: 1},{name: 'InformacionDeContacto'} );

/*Imprime el documento del usuario cuyo Nombre:'Vasily' 
Y Correo: 'vbostickc@rediff.com'*/
//db.Usuarios.find({Nombre: 'Vasily',Correo: 'vbostickc@rediff.com'}).pretty()

//TERCERA PARTE: Agregaciones.

//Match
/*Se mostraran solo los documentos con los que queremos trabajar, 
en este caso solo trabajaremos con los usuarios que compraron 
'El niño con el pijama de rayas'*/
// db.Usuarios.aggregate([
//   { $match : { 'Libros' : 'El niño con el pijama de rayas' } }
// ]).pretty()

//Project
/*Esta consulta se utiliza para seleccionar y mostrar estos 
campos particulares de los documentos en la colección "Usuarios".*/
// db.Usuarios.aggregate([
//   { $project : { _id : 0, Nombre : 1, Apellido : 1, Edad : 1 } }
// ]).pretty()

//Group
/* Se filtran los documentos donde el campo 'Nombre' inicie con la letra D. 
Luego, contamos cuántos documentos cumplen con esta condición y almacenamos 
el resultado en un campo llamado "NombreConM".*/
// db.Usuarios.aggregate([
//     {$match: { Nombre: { $regex: /D/ }}},
//     {$group: {_id: null,NombreConM: { $sum: 1 }}}
//   ]).pretty()
  

//Out
/*Se agrupa los documentos en la colección "Usuarios" por el 
arreglo "Libros" y cuenta cuántos documentos hay en cada grupo. 
Luego, almacena los resultados en una nueva colección llamada 
"CantidadVecesComprados"  */
// db.Usuarios.aggregate([
//     {$unwind: '$Libros'},
//   { $group : { _id : '$Libros', TotalDocs : { $sum : 1 } } },
//   { $out : 'CantidadVecesComprados' }
// ])
// db.CantidadVecesComprados.find().pretty()

//Unwind
/* Filtra los usuarios cuyo Apellido inica con 'C' y sub-dividide 
la informacion del arreglo "Libros".*/
// db.Usuarios.aggregate([
//   { $match : { Apellido : {$regex: /C/} } },
//   { $unwind : '$Libros' }
// ]).pretty()

//Sort
/* Busca a los usuarios cuyos nombres contienen la letra 'D', 
desagrupar el campo 'Libros', proyectar los campos especificados 
y luego ordenar los resultados por el nombre en orden ascendente. */
// db.Usuarios.aggregate([
//   { $match : { Nombre : {$regex: /D/} } },
//   { $unwind : '$Libros' },
//   { $project : { _id : 0, Nombre: 1, Apellido : 1, Libros :1, Precio : 1} },
//   { $sort : { Nombre : 1 } }
// ]).pretty()

//Limit
/*Esta consulta devolvera los 5 primeros usuarios cuya edad sea 
menor o igual a 60, proyectando los campos de nombre, apellido y 
correo, y ordenándolos por el campo "Correo" en orden descendente. */
// db.Usuarios.aggregate([
//   { $match : { Edad : {$lte: 60} } },
//   { $project : { _id : 0, Nombre : 1, Apellido : 1, Correo : 1 } },
//   { $sort : { Correo : -1 } },
//   { $limit : 5 }
// ]).pretty()

//Add Fields
/*Se utiliza para encontrar y marcar al usuario con el Nombre 'Wat' 
asignándoles un nuevo campo "Direccion" con un valor de 'Cll 100 #67-22'. */
// db.Usuarios.aggregate([
//   { $match : {Nombre: 'Wat' } },
//   { $addFields : { Direccion : 'Cll 100 #67-22' }}
// ]).pretty()

//Actualiza la base de datos.
// db.Usuarios.updateMany(
//     { Nombre: 'Wat' } ,
//     { $set: { Direccion : 'Cll 100 #67-22' }}
// );

//Count
/*Se contaran el numero de documentos que hay en el arreglo de 
Libros y al final se arrojara una consulta con el resultado.*/ 
// db.Usuarios.aggregate([
//   { $unwind : '$Libros' },
//   { $count : 'TotalLibros' }
// ]).pretty()
  
//Lookup
/*Este código busca usuarios que han leído 'Los juegos del hambre' 
y recupera información adicional de esos libros desde la 
colección 'Libros'.*/
//  db.Usuarios.aggregate([
//     { $match: { Libros: 'Los juegos del hambre'}},
//     { $project: { _id: 0, Nombre: 1, Apellido: 1, Libros: 1, Precio: 1}},
//     { $lookup: {
//         from: 'Libros',
//         localField: 'Titulo', 
//         foreignField: 'titulo', 
//         as: 'LibrosInfo' 
//       }
//     }
//   ]).pretty()
  
//SortByCount
//Se mostrara el numero de usuarios que tienen la mismo libro.
// db.Usuarios.aggregate([
//     { $unwind : '$Libros' },
//     { $sortByCount : '$Libros' }
// ]).pretty()