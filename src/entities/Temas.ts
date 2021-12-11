import { Column, Entity } from "typeorm";

@Entity("temas", { schema: "capacitacion" })
export class Temas {
  @Column("int", { primary: true, name: "id_tema" })
  idTema: number;

  @Column("varchar", { name: "nombre", nullable: true, length: 45 })
  nombre: string | null;

  @Column("varchar", { name: "descripcion", nullable: true, length: 45 })
  descripcion: string | null;

  @Column("varchar", { name: "duracion", nullable: true, length: 45 })
  duracion: string | null;
}
