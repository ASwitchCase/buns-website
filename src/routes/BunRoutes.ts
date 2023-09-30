import { BunController } from "../controllers/BunController"

const express = require('express')
const router = express.Router()

router.route('/')
    .get(BunController.getAll)
    .post(BunController.insertOne)
router.route('/:id')
    .get(BunController.getOne)
    .delete(BunController.deleteOne)
    .put(BunController.updateOne)

export const BunRoutes = router