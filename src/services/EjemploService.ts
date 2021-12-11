import { injectable } from 'inversify';
import { Request, Response } from 'express';
import { PersonaModel } from '../models/PersonaModel';
import { IEjemploService } from './interface/IEjemploService';

@injectable()
export class EjemploService  implements IEjemploService{



    constructor() {
    }

    public async ejemploAction(request: Request, response: Response) {
        return response.status(200).json('Esto es un ejemplo.')
    }

    public async ejemploActionConParametros(request: Request, response: Response) {
        return response.status(201).json(`Hola ${ request.params.nombre } ${ request.params.apellido }`);
    }

    public async ejemploActionConQParametros(request: Request, response: Response) {
        return response.status(201).json(`Hola ${ request.query.nombre } ${ request.query.apellido }`);
    }

    public async ejemploActionPost(request: Request, response: Response) {
        let persona: PersonaModel = request.body;
        return response.status(201).json(`Soy ${ persona.nombre } ${ persona.apellido } y tengo ${ persona.edad } años`);
    }

    ejemplo(): Promise<any> {
        return Promise.resolve('Este es un ejemplo dos.');
    }

    ejemploConParametros(nombre: string, apellido: string): Promise<any> {
        return Promise.resolve(undefined);
    }

    ejemploConQParametros(nombre: string, apellido: string): Promise<any> {
        return Promise.resolve(undefined);
    }

    ejemploPost(persona: PersonaModel): Promise<any> {
        return Promise.resolve(undefined);
    }

    obtenerTemas(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    obtenerReparticiones(): Promise<any> {
        return Promise.resolve(undefined);
    }

    obtenerReparticionesPorNombre(nombre?: string): Promise<any> {
        return Promise.resolve(undefined);
    }

    obtenerTemasPorSP(idTema: number): Promise<any> {
        return Promise.resolve(undefined);
    }

}
