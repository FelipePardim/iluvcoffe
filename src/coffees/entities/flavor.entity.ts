import { type } from "os";
import { Column, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Coffee } from "./coffee.entity";

export class Flavor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(
        type => Coffee,
        coffee => coffee.flavors
    )
    coffees: Coffee[];
}
