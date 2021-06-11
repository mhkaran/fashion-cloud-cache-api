  
import mongoose from "mongoose";
import {util_env} from "../util";

class DB{

    constructor(){
        mongoose.Promise = Promise;

        mongoose.connection.on('connectd',()=>{
            console.log('connection established');
        });

        mongoose.connection.on('reconnectd',async()=>{
            console.log('connection reestablished');
        });

        mongoose.connection.on('disconnectd',async()=>{
            console.log('connection disconnectd');
        });

        mongoose.connection.on('close',async()=>{
            console.log('connection closed');
        });
    }

    public async connect(){
        const options:mongoose.ConnectionOptions ={
            useCreateIndex:true,
            useFindAndModify:true
        }

        await mongoose.connect(util_env.config.db_uri,options).catch(err=>{
            console.log(`mongooes connection error, ${err}`);
        });
    }
}

const db = new DB();

export default db;