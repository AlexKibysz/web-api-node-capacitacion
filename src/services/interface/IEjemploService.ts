import { PersonaModel } from '../../models/PersonaModel';
import {Reparticiones} from "../../entities/Reparticiones";

export interface IEjemploService {
    ejemplo(): Promise<any>;

    ejemploConParametros(nombre: string, apellido: string): Promise<any>;

    ejemploConQParametros(nombre: string, apellido: string): Promise<any>;

    ejemploPost(persona: PersonaModel): Promise<any>;

    obtenerTemas(): Promise<any>;

    obtenerReparticiones(): Promise<any>

    obtenerReparticionesPorNombre(nombre?: string): Promise<any>

    obtenerTemasPorSP(idTema: number): Promise<any>
}

