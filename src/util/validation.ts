import {ICache,ICacheKey } from "../interface";
import {errorMessage} from "../constant"

class Validation {

    constructor(){}

    public async key(req:ICacheKey):Promise<string>{

        if (!(req.key) || !(req.key.trim())) {
            return errorMessage.mandatory.key;
        }
        return "";
    }

    public async cache(req:ICache):Promise<string>{

        if (!(req.key) || !(req.key.trim())) {
            return errorMessage.mandatory.key;
        }
        
        if (!(req.value) || !(req.value.trim())) {
            return errorMessage.mandatory.value;
        }

        return "";
    }
}

const util_validate = new Validation();

export default util_validate;