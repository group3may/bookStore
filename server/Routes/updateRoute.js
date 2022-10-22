
import express from 'express'
import updateBook from '../Controller/updateController.js'

let updateRoute = express.Router()

updateRoute.patch('/update', updateBook)

export default updateRoute