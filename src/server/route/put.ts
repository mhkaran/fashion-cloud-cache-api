import express from "express";
import {controller_cache} from "../../controller";

class Put{
    public routes:express.Router;
    constructor(){
        this.routes = express.Router();

        this.routes.put('/remove',async(_req:express.Request,res:express.Response,_next:express.NextFunction)=>{
            const resData = await controller_cache.remove();
            res.status(resData.statusCode).json(resData.data);
        });

        this.routes.put('/remove/:key',async(req:express.Request,res:express.Response,_next:express.NextFunction)=>{
            const resData = await controller_cache.removeByKey(req.body);
            res.status(resData.statusCode).json(resData.data);
        });

        this.routes.put('/update',async(req:express.Request,res:express.Response,_next:express.NextFunction)=>{
            const resData = await controller_cache.update(req.body);
            res.status(resData.statusCode).json(resData.data);
        });
    }
}

const route_put = new Put()
export default route_put;