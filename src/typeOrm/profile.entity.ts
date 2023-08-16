import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number

    @Column()
    dob: string;
    
}