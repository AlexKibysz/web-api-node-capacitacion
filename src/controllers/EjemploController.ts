import { Request, Response } from 'express';
import { EjemploService } from '../services/EjemploService';
import { EjemploServiceBis } from '../services/EjemploServiceBis';
import container from '../services/inversify.config';
import EjemploTypes from '../services/types/types';

let _ejemploService = container.get<EjemploService>(EjemploTypes.Ejemplo);
let _ejemploServiceBis = container.get<EjemploServiceBis>(EjemploTypes.EjemploBis);

export async function ejemploAction(request: Request, response: Response) {
    let service: EjemploServiceBis = new EjemploServiceBis();
    return response
        .status(200)
        .json(await service.ejemplo());
}

export async function ejemploActionConParametros(request: Request, response: Response) {

    return response
        .status(201)
        .json(await _ejemploService.ejemploConParametros(request.params.nombre, request.params.apellido));

}

export async function ejemploActionConQParametros(request: Request, response: Response) {
    let service: EjemploService = new EjemploService();
    return service.ejemploActionConQParametros(request, response);
}

export async function ejemploActionPost(request: Request, response: Response) {
    let service: EjemploServiceBis = new EjemploServiceBis();

    return response.status(200).json(await service.ejemploPost(request.body));
}

export async function  obtenerTemas(request: Request, response: Response) {
    return response.status(200).json(await _ejemploServiceBis.obtenerTemas());
}


export async function  obtenerReparticiones(request: Request, response: Response) {
    return response.status(200).json(await _ejemploServiceBis.obtenerReparticiones());
}

export async function  obtenerReparticionesPorNombre(request: Request, response: Response) {
    return response.status(200).json(await _ejemploServiceBis.obtenerReparticionesPorNombre());
}

export async function  obtenerTemasPorSP(request: Request, response: Response) {
    return response.status(200).json(await _ejemploServiceBis.obtenerTemasPorSP(+request.params.id));
}

export const EjemploController = {
    ejemploAction,
    ejemploActionConParametros,
    ejemploActionConQParametros,
    ejemploActionPost,
    obtenerTemas,
    obtenerReparticiones,
    obtenerReparticionesPorNombre,
    obtenerTemasPorSP
}
