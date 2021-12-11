import { Column, Entity, OneToMany } from "typeorm";
import { Profesores } from "./Profesores";

@Entity("cargos", { schema: "capacitacion" })
export class Cargos {
  @Column("int", { primary: true, name: "id_cargo" })
  idCargo: number;

  @Column("varchar", { name: "nombre", nullable: true, length: 45 })
  nombre: string | null;

  @OneToMany(() => Profesores, (profesores) => profesores.idCargo2)
  profesores: Profesores[];
}
