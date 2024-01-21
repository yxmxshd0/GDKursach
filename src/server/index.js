import express from 'express'
import cors from 'cors'
import routerVar from '../routes/routes.js'

const app = express()



app.use(cors())
app.use(express.json());

app.use("/", express.static('src/public'))

app.use(routerVar)

app.listen(3000, () => {
  console.log(`App listening on port 3000`)
})