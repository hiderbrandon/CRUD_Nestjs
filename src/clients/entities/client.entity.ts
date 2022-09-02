import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Client {
    @PrimaryColumn({ type: `varchar`, length: 2 })
    idType: `cc` | `ce` | `ti`;
    @PrimaryColumn({ type: `int`, unique: true })
    id: number;
    @Column({ type: `varchar`, length: 255 })
    firstName: string;
    @Column({ type: `varchar`, length: 255 })
    lastName: string;
    @Column({ type: "smallint", unique: true })
    age: number;
    @Column({ type: `varchar`, length: 255 })
    city: string;


}