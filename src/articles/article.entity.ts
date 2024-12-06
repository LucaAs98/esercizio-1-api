import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  subtitle: string;

  @Column({ type: 'text' })
  summary: string;

  @Column('varchar', { length: 255 })
  date: string;

  @Column({ type: 'varchar', length: 255 })
  author: string;

  @Column({ type: 'text' })
  text: string;

  @Column({ type: 'text', nullable: true })
  image?: string;

  @Column({ type: 'boolean', default: false })
  is_deleted: boolean;

  constructor(article: Partial<Article>) {
    Object.assign(this, article);
  }
}
