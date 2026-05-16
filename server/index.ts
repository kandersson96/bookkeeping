import express from 'express'
import accountsRouter from './routes/accounts'
import cors from 'cors'
const app = express()
export const PORT = 3001

app.use(cors())
app.use(express.json())

app.use('/accounts', accountsRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('API is running')
})