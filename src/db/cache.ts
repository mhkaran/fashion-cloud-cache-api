import {schema_cache} from "./schema";
import {ICache} from "../interface";

class Cache{
    constructor(){
    }

    public async update(cache:ICache){
        return await schema_cache.findOneAndUpdate({key:cache.key},{value:cache.value},{upsert:true,new:true});
    }

    public async removeByKey(key){
        return await schema_cache.findOneAndRemove({key:key});
    }

    public async remove(){
        return await schema_cache.remove({});
    }

    public async getKeys(){
        return await schema_cache.distinct('key')
    }

    public async getValueByKey(key:string){
        return await schema_cache.findOne({key:key})
    }

    public async limitCheck(){
        return await schema_cache.aggregate([
            {
                $facet: {
                    doc: [ {$sort:{createAt:-1 }}, {$limit :1} ],
                    count:[{
                        $count: "total"
                      }]
                }
            }
        ])
    }
}

const db_cache = new Cache();

export default db_cache;