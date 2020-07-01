import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: "users"})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    address: string;

    @Column()
    phone: string;

    @Column()
    phoneCode: string

}
