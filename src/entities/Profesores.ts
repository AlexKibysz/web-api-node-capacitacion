import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Cargos } from "./Cargos";
import { Personas } from "./Personas";

@Index("fk_profesor_persona_idx", ["idPersona"], {})
@Index("fk_profesor_cargo_idx", ["idCargo"], {})
@Entity("profesores", { schema: "capacitacion" })
export class Profesores {
  @Column("int", { primary: true, name: "id_profesor" })
  idProfesor: number;

  @Column("int", { name: "id_cargo", nullable: true })
  idCargo: number | null;

  @Column("int", { name: "id_persona", nullable: true })
  idPersona: number | null;

  @ManyToOne(() => Cargos, (cargos) => cargos.profesores, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_cargo", referencedColumnName: "idCargo" }])
  idCargo2: Cargos;

  @ManyToOne(() => Personas, (personas) => personas.profesores, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_persona", referencedColumnName: "idPersona" }])
  idPersona2: Personas;
}
