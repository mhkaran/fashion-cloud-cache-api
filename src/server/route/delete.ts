import express from "express";
import {controller_cache} from "../../controller";

class Delete{
    public routes:express.Router;
    constructor(){
        this.routes = express.Router();

        this.routes.delete('/remove',async(_req:express.Request,res:express.Response,_next:express.NextFunction)=>{
            const resData = await controller_cache.remove();
            res.status(resData.statusCode).json(resData.data);
        });

        this.routes.delete('/remove/:key',async(req:express.Request,res:express.Response,_next:express.NextFunction)=>{
            const resData = await controller_cache.removeByKey(req.params);
            res.status(resData.statusCode).json(resData.data);
        });
    }
}

const route_delete = new Delete()
export default route_delete;