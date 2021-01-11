import {Router,Request,Response} from "express";

export const router = Router();


router.get("/mensajes",(req:Request, res:Response)=>{
    res.status(200).send({
        status:"success",
        message:"todo correcto"
    });
});

router.post("/mensajes",(req:Request, res:Response)=>{
     const {cuerpo,de} = req.body;

    res.status(200).send({
        status:"success",
        cuerpo,
        de
    });
});

router.post("/mensajes:id",(req:Request, res:Response)=>{
    const {cuerpo,de} = req.body;
    const {id} = req.params;

   res.status(200).send({
       status:"success",
       cuerpo,
       de
   });
});
