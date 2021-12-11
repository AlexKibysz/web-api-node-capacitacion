import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Personas } from "./Personas";
import { Reparticiones } from "./Reparticiones";

@Index("fk_alumnos_reparticion_idx", ["idReparticion"], {})
@Index("fk_alumno_personas_idx", ["idPersona"], {})
@Entity("alumnos", { schema: "capacitacion" })
export class Alumnos {
  @PrimaryGeneratedColumn({ type: "int", name: "id_alumno" })
  idAlumno: number;

  @Column("int", { name: "id_reparticion", nullable: true })
  idReparticion: number | null;

  @Column("int", { name: "id_persona", nullable: true })
  idPersona: number | null;

  @ManyToOne(() => Personas, (personas) => personas.alumnos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_persona", referencedColumnName: "idPersona" }])
  idPersona2: Personas;

  @ManyToOne(() => Reparticiones, (reparticiones) => reparticiones.alumnos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "id_reparticion", referencedColumnName: "idReparticion" },
  ])
  idReparticion2: Reparticiones;
}
