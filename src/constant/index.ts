import {IConfig, IErroMessage} from "../interface"
import {httpStatusCode} from "./httpStatusCode";
const config:IConfig = require("./config.json");
const errorMessage:IErroMessage = require("./errorMessage.json");

export{
    httpStatusCode,
    config,
    errorMessage
}