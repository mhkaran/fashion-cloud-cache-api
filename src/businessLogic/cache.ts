import {ICache} from "../interface"
import {db_cache} from "../db";
import {config} from "../constant"

class Cache{

    constructor(){
    }

    public async create(cache:ICache){
        
        const cacheCount = await db_cache.limitCheck();
        if (cacheCount[0].count[0].total>=config.cache_limit)
        await this.removeByKey(cacheCount[0].doc[0].key)
       return await db_cache.update(cache)
    }

    public async update(cache:ICache){
       return await db_cache.update(cache)
    }

    public async getValueByKey(key:string){
        const cache = await db_cache.getValueByKey(key);
        if (cache) return cache.value;
        else {
            const value =Math.random().toString(36).slice(2);
            await this.create({key:key,value:value});
            return value;
        }
    }

    public async getKeys(){
        return await db_cache.getKeys();
    }

    public async removeByKey(key:string){
        return await db_cache.removeByKey(key);
    }

    public async remove(){
        return await db_cache.remove();
    }
}


const businessLogic_cache = new Cache();

export default businessLogic_cache;