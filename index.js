//Bloque de importación
const express = require('express');
const exphbs = require('express-handlebars');

//Instancia de express y puerto a utilizar
const app = express();
const PORT = process.env.PORT || 4000;

//Ruta para los estilos de Bootstrap
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
//Ruta para el script de Bootstrap
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
// Ruta para las imagenes
app.use(express.static(__dirname + '/img'));
//Ruta para el script js del frontend
app.use('/frontend', express.static(__dirname + '/front'))

//Definición de handlebars como motor de plantillas
app.set("view engine", "handlebars");

//Configuración del motor de plantillas
app.engine('handlebars', exphbs.engine({
    extname: '.handlebars',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views',
    partialsDir: __dirname + '/views/partecillas'
}));

//Creacion de la ruta raiz del sitio donde ocurre todo
app.get("/", (req, res) => {
    res.render("main", {
        nProductos: ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"] //Arreglo enviado con los nombres de los productos
    });
});

//Ruta por defecto para sitios no definidos
app.get("*", (req, res) => {
    res.send("<h1>Este sitio no existe :c</h1>")
});


app.listen(PORT, () => {
    console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});