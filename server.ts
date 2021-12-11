import "reflect-metadata";
import Express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import { AppRoutes } from './routes';
import {connectDB} from "./database";

const app = Express();

/**
 * app.use(bp.json())examina las solicitudes donde Content-Type: application/json está presente el encabezado y transforma
 * la entrada JSON basada en texto en variables accesibles a JS en req.body. app.use(bp.urlencoded({extended: true})
 * hace lo mismo con las solicitudes codificadas en URL. el extended: trueprecisa que el req.bodyobjeto contendrá valores
 * de cualquier tipo en lugar de solo cadenas.
 * **/
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

AppRoutes.forEach((route) => {
    app.use(
        route.path,
        (request: Request, response: Response, next: Function) => {
            route
                .action(request, response)
                .then(() => next)
                .catch((err) => next(err));
        }
    );
});


// Iniciamos el servidor express
const startServer = async () => {
    await app.listen(process.env.PORT || 8080, () => {
        console.log(
            `Server running on http://127.0.0.1:${ process.env.PORT }`
        );
    });
};

(async () => {
    await connectDB();
    await startServer();
})();
