use('BibliotecaPublica');

//PRIMERA PARTE: Sub-Consultas CRUD
//InsertOne: Insertamos un documento en la colección Libros.
/*db.Libros.insertOne(
  {
    Titulo: 'Pasajero 23',
    Autor: {
      Nombre: 'Sebastian',
      Apellido: 'Fitzek',
      Nacionalidad: 'Alemana'
    },
    Genero: ['Misterio', 'Terror', 'Ficcion'],
    Editorial: ['Cambridge University Press', 'Scholastic'],
    Precio: 20,
    Cantidad: 50 
  }
);

//InsertMany: Insertamos 20 documento en la colección Libros.
db.Libros.insertMany([
{"Titulo":"El retrato de Dorian Gray","Autor":{"Nombre":"Ebba","Apellido":"Morritt","Nacionalidad":"Indonesia"},"Genero":["Autobiografía","Horror","Ciencia popular"],"Editorial":["Pearson"],"Precio":260,"Cantidad":36},
{"Titulo":"Los hombres me explican cosas","Autor":{"Nombre":"Richmound","Apellido":"Thorowgood","Nacionalidad":"Czech Republic"},"Genero":["Suspenso","Aventura","Poesía"],"Editorial":["John Wiley & Sons"],"Precio":274,"Cantidad":69},
{"Titulo":"Canción de hielo y fuego","Autor":{"Nombre":"Violet","Apellido":"Itzkovwich","Nacionalidad":"France"},"Genero":["Ensayo","Divulgación científica."],"Editorial":["Abrams","Cambridge University Press"],"Precio":50,"Cantidad":55},
{"Titulo":"Orgullo y prejuicio","Autor":{"Nombre":"Renata","Apellido":"Stobbes","Nacionalidad":"Ghana"},"Genero":["Cuento largo","Filosofía"],"Editorial":["Oxford University Press","Cambridge University Press"],"Precio":412,"Cantidad":26},
{"Titulo":"Historia de dos ciudades","Autor":{"Nombre":"Gabriel","Apellido":"Pichmann","Nacionalidad":"Morocco"},"Genero":["Ciencia popular","Crítica literaria"],"Editorial":["Elsevier"],"Precio":288,"Cantidad":58},
{"Titulo":"En busca del tiempo perdido","Autor":{"Nombre":"Ninon","Apellido":"Fydo","Nacionalidad":"Sweden"},"Genero":["Diario","Ciencia popular","Filosofía"],"Editorial":["Cambridge University Press"],"Precio":389,"Cantidad":87},
{"Titulo":"Cazadores de sombras","Autor":{"Nombre":"Julianna","Apellido":"Fitzpayn","Nacionalidad":"Bosnia and Herzegovina"},"Genero":["Cuento largo","Crónica"],"Editorial":["Candlewick Press","Springer"],"Precio":391,"Cantidad":92},
{"Titulo":"Moby-Dick","Autor":{"Nombre":"Rosemonde","Apellido":"Ianiello","Nacionalidad":"Macedonia"},"Genero":["Religión"],"Editorial":["National Geographic Society"],"Precio":6,"Cantidad":89},
{"Titulo":"Viaje al centro de la tierra","Autor":{"Nombre":"Phyllys","Apellido":"Elgee","Nacionalidad":"Peru"},"Genero":["Cuento corto","Aventura"],"Editorial":["Scholastic"],"Precio":315,"Cantidad":71},
{"Titulo":"After","Autor":{"Nombre":"Andriette","Apellido":"Screase","Nacionalidad":"China"},"Genero":["Humor","Horror"],"Editorial":["Abrams","DK Publishing"],"Precio":218,"Cantidad":80},
{"Titulo":"Harry Potter y la piedra filosofal","Autor":{"Nombre":"Stevie","Apellido":"Filliskirk","Nacionalidad":"China"},"Genero":["Crítica literaria"],"Editorial":["Routledge"],"Precio":66,"Cantidad":18},
{"Titulo":"1984","Autor":{"Nombre":"Trescha","Apellido":"Goodere","Nacionalidad":"Poland"},"Genero":["Ciencia ficción"],"Editorial":["National Geographic Society"],"Precio":171,"Cantidad":99},
{"Titulo":"Crónica de una muerte anunciada","Autor":{"Nombre":"Patrick","Apellido":"Burmaster","Nacionalidad":"Colombia"},"Genero":["Fantasía","Ficción","Drama"],"Editorial":["National Geographic Society","Planeta VII"],"Precio":491,"Cantidad":60},
{"Titulo":"La Odisea","Autor":{"Nombre":"Allistir","Apellido":"Parmby","Nacionalidad":"Nicaragua"},"Genero":["Ensayo","Periodismo"],"Editorial":["Lonely Planet."],"Precio":423,"Cantidad":63},
{"Titulo":"Los juegos del hambre","Autor":{"Nombre":"Patrick","Apellido":"Ablett","Nacionalidad":"Finland"},"Genero":["Crónica"],"Editorial":["DK Publishing","Pan Macmillan"],"Precio":461,"Cantidad":87},
{"Titulo":"El código Da Vinci","Autor":{"Nombre":"Debbie","Apellido":"Hollingshead","Nacionalidad":"Portugal"},"Genero":["Ciencia popular"],"Editorial":["Wiley"],"Precio":264,"Cantidad":37},
{"Titulo":"Percy Jackson","Autor":{"Nombre":"Pyotr","Apellido":"Lesaunier","Nacionalidad":"France"},"Genero":["Diario"],"Editorial":["Planeta VII","Springer"],"Precio":473,"Cantidad":22},
{"Titulo":"El Gran Gatsby","Autor":{"Nombre":"Gottfried","Apellido":"Edgson","Nacionalidad":"China"},"Genero":["Política","Ciencia popular","Novela romántica"],"Editorial":["Wiley"],"Precio":140,"Cantidad":67},
{"Titulo":"Matar a un elefante","Autor":{"Nombre":"Beatrix","Apellido":"Tock","Nacionalidad":"Morocco"},"Genero":["Ciencia","Ficción histórica"],"Editorial":["Cambridge University Press"],"Precio":120,"Cantidad":76},
{"Titulo":"El Gran Diseño","Autor":{"Nombre":"Clayson","Apellido":"Macklam","Nacionalidad":"Cameroon"},"Genero":["Misterio","Fantasía"],"Editorial":["Candlewick Press"],"Precio":116,"Cantidad":50}
]);*/

/*findOne: Mostrar un libro que tenga como Genero:'Filosofía' 
Y Editorial: 'Cambridge University Press'.*/
// db.Libros.findOne({$and: [{Genero:'Filosofía'},
// {Editorial:'Cambridge University Press'}]});

/*find: Mostrar los libros cuyo Precio es menor o igual a 100 
y su cantidad es mayor a 50.*/
//db.Libros.find({Precio:{$lte:100},Cantidad:{$gt:50}});

/*updateOne: Actualizar un libro cuya Autor tiene Nacionalidad es 
'China' O su Genero es de 'Ficción' por 'Narraciones Extraordinarias'.*/
// db.Libros.updateOne(
//     {$or: [{'Autor.Nacionalidad':'China'},{Genero:'Ficción'}]},
//     {$set:{Titulo:'Narraciones Extraordinarias'}}
// );

/*updateMany: Actualizar los libros cuya Editorial este entre 
'Naranja' y 'Springer', por la Nacionalidad 'Italy'.*/
// db.Libros.updateMany(
//   {Editorial:{$in:['Naranja','Springer']}},
//   { $set: { 'Autor.Nacionalidad': 'Italy' } }
// );

//deleteOne: Eliminar un libro cuyo Apellido del Autor sea igual a 'Tock'.
//db.Libros.deleteOne({'Autor.Apellido':{$eq:'Tock'}});

/*deleteMany: Eliminar a los libros cuyo Genero es Horror O 
su Editorial es 'National Geographic Society'.*/
// db.Libros.deleteMany({$or: [{Genero:'Horror'},
// {Editorial:'National Geographic Society'}]});


//SEGUNDA PARTE: Indice simple - Indice compuesto 

//Indice simple
//Este indice permite encontrar de forma rapido los 'Libros_Registrados'.
//db.Libros.createIndex({ Titulo: 1 }, { name: 'Libros_Registrados' })

//Imprime los libros que estan en el indicador que inician con L.
//db.Libros.find({ Titulo: { $regex: /L/ } }).pretty()

//Indice compuesto
/*Este indice acelera las consultas que involucren búsquedas o 
clasificaciones basadas en los campos 'Titulo', 'Autor.Nombre',
'Autor.Apellido' y 'Precio' de los documentos en la colección "Libros".*/
// db.Libros.createIndex( {Titulo:1,'Autor.Nombre':1,'Autor.Apellido':1, 
// Precio:1},{name: 'InformacionLibros'} );

/*Imprime el documento del libro cuyo autor se Apellido 'Hollingshead' 
y Precio sea igual a mayor a 200.*/
// db.Libros.find({'Autor.Apellido': 'Hollingshead', Precio:{$gte:200}}
// ).pretty()


//TERCERA PARTE: Agregaciones.

//Match
/*Se mostraran solo los documentos con los que queremos trabajar, 
en este caso solo trabajaremos con los libros del Autor 'Ninon'*/
// db.Libros.aggregate([
//   { $match : { 'Autor.Nombre' : 'Ninon' } }
// ]).pretty()

//Project
/*Esta consulta se utiliza para seleccionar y mostrar estos 
campos particulares de los documentos en la colección "Libros".*/
// db.Libros.aggregate([
//   { $project : { _id : 0, Titulo:1,'Autor.Nombre' : 1, 
// 'Autor.Apellido' : 1, Precio : 1 } }
// ]).pretty()

//Group
/* Se sumaran todos los valores del campo 'Precio' en la colección 'Libros'*/
// db.Libros.aggregate([
//   { $group: { _id: null, TotalRecaudado: { $sum: '$Precio' } } }
// ]).pretty();

//Out
/*Se realiza una agregación en la colección 'Libros' para contar cuántos 
registros pertenecen a cada género en el array 'Genero', y luego almacena 
los resultados en una nueva colección llamada 'NumRegistroGenero'. 
Luego, almacena los resultados en una nueva colección llamada 
"CantidadVecesComprados"  */
// db.Libros.aggregate([
//   {$unwind: '$Genero'},
//   { $group : { _id : '$Genero', NRegistroGenero : { $sum : 1 } } },
//   { $out : 'NumRegistroGenero' }
// ])
// db.NumRegistroGenero.find().pretty()

//Unwind
/* Filtra los libros cuya Nacionalidad inica con 'M' y sub-dividide 
la informacion del arreglo "Autor".*/
// db.Libros.aggregate([
//   { $match : { 'Autor.Nacionalidad' : {$regex: /M/} } },
//   { $unwind : '$Autor' }
// ]).pretty()


//Sort
/* Se desagrupa los autores de los libros en la colección 
'Libros', proyecta información relevante sobre el libro 
y el autor, y luego ordena los resultados por título del 
libro en orden ascendente. */
// db.Libros.aggregate([
//   { $unwind : '$Autor' },
//   { $project : { _id : 0, Titulo: 1,'Autor.Nombre': 1, 
//   'Autor.Apellido' : 1, Precio: 1} },
//   { $sort : { Titulo : 1 } }
// ]).pretty()

//Limit
/*Busca libros con un precio igual o superior a $50, proyecta 
información sobre el título, nombre y apellido del autor, y 
la cantidad de libros disponibles. Luego, ordena los resultados 
por el nombre del autor en orden descendente y limita la salida 
a los primeros 3 libros que cumplen con el criterio de precio. */
// db.Libros.aggregate([
//   { $match : { Precio : {$gte: 50} } },
//   { $project : { _id : 0, Titulo: 1,'Autor.Nombre': 1, 
//   'Autor.Apellido' : 1, Cantidad : 1 } },
//   { $sort : { 'Autor.Nombre' : -1 } },
//   { $limit : 3 }
// ]).pretty()

//Add Fields
/*Se utiliza para encontrar y marcar al usuario con el 
Titulo de'Cazadores de sombras' asignándoles un nuevo 
campo "TotalLibros" con un numero de 24. */
// db.Libros.aggregate([
//   { $match : {Titulo : 'Cazadores de sombras' } },
//   { $addFields : { TotalLibros : 24 }}
// ]).pretty()

//Actualiza la base de datos.
// db.Libros.updateMany(
//   { Titulo : 'Cazadores de sombras' } ,
//   { $set: { TotalLibros : 24 }}
// );

//Count
/*Se contaran el numero de documentos que hay en el arreglo de 
editorial y al final se arrojara una consulta con el resultado.*/ 
// db.Libros.aggregate([
//   { $unwind : '$Editorial' },
//   { $count : 'TotalLibros' }
// ]).pretty()
  
//Lookup
/*Este código busca el titulo del libro 'La Odisea' y 
recupera información adicional de los usuarios que lo 
han leido desde la colección 'Usuarios'.*/
// db.Libros.aggregate([
//   { $match: {Titulo: 'La Odisea'}},
//   { $project: {_id: 0, 'Autor.Nombre': 1, 
//   'Autor.Apellido': 1, Cantidad:1 ,Precio: 1}},
//   { $lookup: {
//       from: 'Usuarios',
//       localField: 'Titulo', 
//       foreignField: 'libros', 
//       as: 'UsuariosInfo' 
//     }
//   }
// ]).pretty();

//SortByCount
//Se mostrara el numero de editoriales que tienen la mismo nombre.
// db.Libros.aggregate([
//     { $unwind : '$Editorial' },
//     { $sortByCount : '$Editorial' }
// ]).pretty()