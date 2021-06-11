import {ICacheKey, IResponse, ICache} from "../interface"
import {util_validate} from "../util"
import {httpStatusCode, config} from "../constant";
import {businessLogic_cache} from "../businessLogic"

class Cache{

    constructor(){
    }

    public async getValueByKey(cacheKey:ICacheKey){
        let res:IResponse={} as IResponse;
        try{

            const err = await util_validate.key(cacheKey);
            if (err) {
                res.statusCode=httpStatusCode.BAD_REQUEST
                res.data =err
                return res;
            }
            res.data= await businessLogic_cache.getValueByKey(cacheKey.key!)
            res.statusCode=httpStatusCode.OK;
            
            return res;

        } catch(err){
            res.statusCode=httpStatusCode.INTERNAL_SERVER_ERROR;
            res.data=config.server_error;
            return res;
        }
    }

    public async getKeys(){
        let res:IResponse={} as IResponse;
        try{
            res.data= await businessLogic_cache.getKeys();
            res.statusCode=httpStatusCode.OK;
            return res;
        } catch(err){
            res.statusCode=httpStatusCode.INTERNAL_SERVER_ERROR;
            res.data=config.server_error;
            return res;
        }
    }

    public async create(cache:ICache){
        let res:IResponse={} as IResponse;
        try{
            const err = await util_validate.cache(cache);
            if (err) {
                res.statusCode=httpStatusCode.BAD_REQUEST
                res.data =err
                return res;
            }
            const cacheRecord =  await businessLogic_cache.create(cache)
            if (cacheRecord.createdAt === cacheRecord.updatedAt){
                res.statusCode=httpStatusCode.CREATED;
                res.data= `cache created for key ${cache.key}`;
            }
            else
            {
                res.statusCode=httpStatusCode.OK;
                res.data=  `cache updated for key ${cache.key}`;
            }
            return res;
        } catch(err){
            res.statusCode=httpStatusCode.INTERNAL_SERVER_ERROR;
            res.data=config.server_error;
            return res;
        }
    }

    public async update(cache:ICache){
        let res:IResponse={} as IResponse;
        try{
            const err = await util_validate.cache(cache);
            if (err) {
                res.statusCode=httpStatusCode.BAD_REQUEST
                res.data =err
                return res;
            }
            const updatedCache = await businessLogic_cache.update(cache);
           if (updatedCache){
                if (updatedCache.createdAt === updatedCache.updatedAt){
                    res.statusCode=httpStatusCode.CREATED;
                    res.data= `cache created for key ${cache.key}`;
                }
                else{
                    res.statusCode=httpStatusCode.OK;
                    res.data= `cache updated for key ${cache.key}`;
                }
            }
            else{
                res.statusCode=httpStatusCode.NOT_FOUND;
                res.data= `no cache found for key ${cache.key}`;
            }
            return res;
        } catch(err){
            res.statusCode=httpStatusCode.INTERNAL_SERVER_ERROR;
            res.data=config.server_error;
            return res;
        }
    }

    public async removeByKey(cacheKey:ICacheKey){
        let res:IResponse={} as IResponse;
        try{
            const err = await util_validate.key(cacheKey);
            if (err) {
                res.statusCode=httpStatusCode.BAD_REQUEST
                res.data =err
                return res;
            }
            await businessLogic_cache.removeByKey(cacheKey.key!);
            res.statusCode=httpStatusCode.DELETED;
            res.data= `cache removed for key : ${cacheKey.key}`;
            return res;
        } catch(err){
            res.statusCode=httpStatusCode.INTERNAL_SERVER_ERROR;
            res.data=config.server_error;
            return res;
        }
    }

    public async remove(){
        let res:IResponse={} as IResponse;
        try{
            await businessLogic_cache.remove();
            res.statusCode=httpStatusCode.DELETED;
            res.data= "all cache data removed!";
            return res;
        } catch(err){
            res.statusCode=httpStatusCode.INTERNAL_SERVER_ERROR;
            res.data=config.server_error;
            return res;
        }
    }
}

const controller_cache = new Cache();

export default controller_cache;