const database = 'BibliotecaPublica';
const collection1 = 'Trabajadores';
const collection2 = 'Usuarios';
const collection3 = 'Libros';

// Crear una base de datos
use(database);

// Crear colecciones.
db.createCollection(collection1);
db.createCollection(collection2);
db.createCollection(collection3);
