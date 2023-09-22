import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user';
import cors from 'cors'
dotenv.config()


const app: express.Application = express();

const port = process.env.PORT || '3000'

app.listen(port, () => {
  console.log('listern to port ' + port)
})

app.use(cors())
app.use(express.json())
app.use('/api', userRouter)