//2. Importar el Framework express
import express from "express";
//2.2. Dirigirse a package.json y crear debajo de ("description": "",) a ("type": "module",) 

//3. Guardar a express en una variable
const app = express();

//4. Crear el puerto
app.set("port", 4000);

//5. Exportar a esa constante --- (ir a index.js)
export default app; 