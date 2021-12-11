import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("puntajes", { schema: "capacitacion" })
export class Puntajes {
  @PrimaryGeneratedColumn({ type: "int", name: "id_puntaje" })
  idPuntaje: number;

  @Column("int", { primary: true, name: "id_alumno" })
  idAlumno: number;

  @Column("int", { primary: true, name: "id_profesor" })
  idProfesor: number;

  @Column("int", { primary: true, name: "id_tema" })
  idTema: number;

  @Column("int", { name: "interes", nullable: true })
  interes: number | null;

  @Column("int", { name: "complejidad", nullable: true })
  complejidad: number | null;

  @Column("int", { name: "entendimiento", nullable: true })
  entendimiento: number | null;

  @Column("int", { name: "valoracion", nullable: true })
  valoracion: number | null;

  @Column("varchar", { name: "observaciones", nullable: true, length: 500 })
  observaciones: string | null;
}
