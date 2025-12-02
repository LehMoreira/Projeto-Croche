import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  titulo!: string;

  @Column()
  descricao!: string;

  @Column({ type: 'simple-array' })
  topicos!: string[]; 

  @Column()
  nivel!: 'iniciante' | 'intermediario' | 'avancado';

  @Column({ type: 'decimal', default: 0 })
  preco!: number;

  @Column({ default: false })
  gratuito!: boolean;

  @Column({ nullable: true })
  urlVideo!: string; 

  @CreateDateColumn()
  criadoEm!: Date;
}