import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Note } from "./Note";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @ManyToMany(type => Note, note => note.categories)
  @JoinTable()
  notes?: Note[];
}
