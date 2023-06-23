//6. Importar el app
import app from "./app.js"

//1. Hacer un metodo main con una function expression
const main = () => {
    //7. Utilizamos el app y hacemos que escuche el puerto indicado
    app.listen(app.get("port")) //app.get selecciona el puerto como lo referenciamos, en este caso "port"
    console.log(`Alquilartemis is running on port ${app.get("port")}`); //aqui podemos comprovar el consola si se esta ejecutando

    //8. Dirigete a package.json y dentro de ("scripts":) borra el ("text":)
    //8.1. Creamos ahi mismo a ("dev": "node src/index.js")
    //8.2. Ejecutar el archivo con   npm run dev  Nota: Recuerda que debes estar ubicado en backend
}

//1.2. La invocamos para que se este ejecutando --- (ir a app.js)
main();