import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Note } from "./Note";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  username?: string;

  @Column()
  password?: string;

  @Column()
  email?: string;

  @OneToMany(type => Note, note => note.user)
  notes?: Note[];
}
