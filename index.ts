//paquetes de node
import {urlencoded,json} from "body-parser";
import cors  from "cors";
//rutas
import  {router} from "./routes/routes";

import Server from "./clases/server";
import { SERVER_PORT } from "./globals/environments";

const server = new Server();

//midlewares
server.app.use(cors({
    origin:true,credentials:true
}));
server.app.use(urlencoded({extended:true}));
server.app.use(json());

//rutas
server.app.use(router);

server.start(()=>{
    console.log(`escuchando peticiones por el puerto: ${SERVER_PORT}`)
});
