import { Column, Entity, OneToMany } from "typeorm";
import { Alumnos } from "./Alumnos";

@Entity("reparticiones", { schema: "capacitacion" })
export class Reparticiones {
  @Column("int", { primary: true, name: "id_reparticion" })
  idReparticion: number;

  @Column("varchar", { name: "nombre", nullable: true, length: 45 })
  nombre: string | null;

  @OneToMany(() => Alumnos, (alumnos) => alumnos.idReparticion2)
  alumnos: Alumnos[];
}
