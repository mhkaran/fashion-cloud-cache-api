import {IConfig} from "../interface";

class ENV {
    public config={} as IConfig;
    constructor(){
        this.config.db_uri=process.env.MONGO_URI!;
        //this.config.db_uri = "mongodb://localhost:27017/?readPreference=primary";
    }
}

const util_env = new ENV();

export default util_env;