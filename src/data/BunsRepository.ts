import Database from "bun:sqlite";
import { BunType } from "../Models/BunType";

export class BunsRepository {
    DATABASE_NAME : string = "myBuns"
    constructor(private database : Database){
        const table = database.run(`CREATE TABLE IF NOT EXISTS ${this.DATABASE_NAME}(
            id varchar(255),
            name varchar(255),
            rate int,
            description varchar(255)
            )`)
    }

    getAll(){
        return this.database.query(`SELECT * FROM ${this.DATABASE_NAME}`).all()
    }

    getOne(id :string){
        return this.database.query(`SELECT * FROM ${this.DATABASE_NAME} WHERE id='${id}'`).all()
    }

    insertOne(newBun : BunType) : void {
        this.database.prepare(
            `INSERT INTO ${this.DATABASE_NAME} (id,name,rate,description) VALUES ($id,$name,$rate,$description)`)
            .run(newBun.id,newBun.name,newBun.rate,newBun.description)
    }

    insertMany(newBuns : BunType[]) : void{
        for(const bun of newBuns) this.insertOne(bun)
    }

    updateOne(id : string, newBun : any) : void{
        this.database.prepare(`UPDATE ${this.DATABASE_NAME} 
            SET name=$name, rate=$rate, description=$description 
            WHERE id='${id}'
            `)
            .run(newBun.name,newBun.rate,newBun.description)
    }

    deleteOne(id : string) : void{
        this.database.prepare(`DELETE FROM ${this.DATABASE_NAME} WHERE id='${id}'`)
            .run()
    }
}