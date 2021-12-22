import express from 'express'
import setupMiddleware from './middlewares'

const app = express()

setupMiddleware(app)

export default app
