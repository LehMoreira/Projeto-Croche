import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { Usuario } from "./Usuario";
import { Produto } from "./Produto";

@Entity()
export class Pedido{
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Usuario)
  usuario!: Usuario;

  @ManyToOne(() => Produto)
  produto!: Produto;

  @Column()
  status!: 'pendente' | 'confirmado' | 'enviado' | 'entregando';

  @Column()
  selecaoCor!: string;

  @Column({ nullable: true })
  descricaoCustomizacao!: string;

  @CreateDateColumn()
  data!: Date;
}
