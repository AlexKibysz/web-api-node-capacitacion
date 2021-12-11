import {Expose} from 'class-transformer';

export class TemasModel {
    @Expose({name: 'id_tema'})
    idTema: number;
    @Expose({name: 'nombre'})
    nombre: string | null;
    @Expose({name: 'descripcion'})
    descripcion: string | null;
    @Expose({name: 'duracion'})
    duracion: string | null;

    constructor(idTema: number, nombre: string | null, descripcion: string | null, duracion: string | null) {
        this.idTema = idTema;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.duracion = duracion;
    }
}
