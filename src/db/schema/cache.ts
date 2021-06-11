import mongoose,{Schema} from "mongoose";

const cacheSchema = new Schema({
    key:{type:String, required:true, unique:true},
    value:{type:String, required:true},
    expireAt: {type:Date, default: Date.now}
}, {timestamps: true}).index({ "expireAt": 1 }, { expireAfterSeconds: 900 });

const schema_cache = mongoose.model("cache",cacheSchema,"cache");

export default schema_cache;