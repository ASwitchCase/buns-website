import Database from "bun:sqlite";
import { BunsRepository } from "../data/BunsRepository";

const {v4 : uuidv4} = require('uuid')

const {Request : Req,Response : Res} = require('express')

let repo = new BunsRepository(new Database("mydb.sqlite",{create:true}))

const getAll = (req : typeof Req ,res : typeof Res) =>{
    const data = repo.getAll()
    res.json(data)
}

const getOne = (req : typeof Req ,res : typeof Res) =>{
    const data = repo.getOne(req.params.id)
    res.json(data)
}

const insertOne = (req : typeof Req ,res : typeof Res) => {
    const data = {
        id: uuidv4(),
        name: req.body.name,
        rate: req.body.rate,
        description: req.body.description
    }
    repo.insertOne(data)

    res.json(data)
}

const deleteOne = (req : typeof Req ,res : typeof Res) => {
    const data = repo.deleteOne(req.params.id)
    res.json("Bun Removed")
}

const updateOne = (req : typeof Req ,res : typeof Res) => {
    const data = {
        $name: req.body.name,
        $rate: req.body.rate,
        $description: req.body.description
    }
    
    repo.updateOne(req.params.id,data)
    res.json("Bun Updated")
}

export const BunController = {
    getAll,
    getOne,
    deleteOne,
    insertOne,
    updateOne,
}