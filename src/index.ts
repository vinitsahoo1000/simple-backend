import express from "express"
import cors from "cors"
import { mainRouter } from "./routes";

const port = Number(process.env.PORT) || 8080;
const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/v1',mainRouter)

app.listen(port, "0.0.0.0" ,()=>{
    console.log(`server running on  port ${port}`)
})
