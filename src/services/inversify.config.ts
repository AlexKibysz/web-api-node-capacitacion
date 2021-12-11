import { Container } from 'inversify';
import { IEjemploService } from './interface/IEjemploService';
import EjemploTypes from './types/types';
import { EjemploServiceBis } from './EjemploServiceBis';
import { EjemploService } from './EjemploService';

const container = new Container();

container.bind<IEjemploService>(EjemploTypes.Ejemplo).to(EjemploService);
container.bind<IEjemploService>(EjemploTypes.EjemploBis).to(EjemploServiceBis);

export default container;
