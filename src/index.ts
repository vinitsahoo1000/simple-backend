import express from "express"
import cors from "cors"
import { mainRouter } from "./routes";

const port = process.env.PORT || 8080;
const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/v1',mainRouter)

app.listen(port,()=>{
    console.log(`server running on  port ${port}`)
})
