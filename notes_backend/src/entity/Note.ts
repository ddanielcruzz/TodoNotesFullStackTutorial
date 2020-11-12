import {
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import { User } from "./User";
import { Category } from "./Category";

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title?: string;

  @Column()
  description?: string;

  @Column({ type: "smallint" })
  status?: number;

  @Column({ type: "timestamp" })
  scheduledDatetime?: string;

  @ManyToOne(type => User, user => user.notes)
  user?: User;

  @ManyToMany(type => Category, category => category.notes)
  categories?: Category[];
}
