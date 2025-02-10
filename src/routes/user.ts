import express, { Request, Response } from "express"

export const userRouter = express.Router();


userRouter.get("/sum",async(req:Request,res:Response):Promise<any>=>{
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send({ msg: "Invalid query parameters" });
    }
    
    res.send({
        msg: `sum of a and b is ${a + b}`
    })
})

userRouter.get("/divide",async(req:Request,res:Response):Promise<any>=>{
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send({ msg: "Invalid query parameters" });
    }
    
    res.send({
        msg: `sum of a and b is ${a / b}`
    })
})


userRouter.get("/multiply",async(req:Request,res:Response):Promise<any>=>{
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send({ msg: "Invalid query parameters" });
    }
    
    res.send({
        msg: `sum of a and b is ${a * b}`
    })
})