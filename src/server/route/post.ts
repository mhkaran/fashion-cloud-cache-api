import express from "express";
import {controller_cache} from "../../controller";

class Post{
    public routes:express.Router;
    constructor(){
        this.routes = express.Router();

        this.routes.post('/create',async(req:express.Request,res:express.Response,_next:express.NextFunction)=>{
            const resData = await controller_cache.create(req.body);
            res.status(resData.statusCode).json(resData.data);
        });
    }
}

const route_put = new Post()
export default route_put;