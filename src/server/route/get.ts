import express from "express";
import {controller_cache} from "../../controller";

class Get{
    public routes:express.Router;
    constructor(){
        this.routes = express.Router();

        this.routes.get('/keys',async(_req:express.Request,res:express.Response,_next:express.NextFunction)=>{
            const resData = await controller_cache.getKeys();
            res.status(resData.statusCode).json(resData.data);
        });

        this.routes.get('/key/:key',async(req:express.Request,res:express.Response,_next:express.NextFunction)=>{
            const resData = await controller_cache.getValueByKey(req.params);
            res.status(resData.statusCode).json(resData.data);
        });
    }
}

const route_get = new Get()
export default route_get;