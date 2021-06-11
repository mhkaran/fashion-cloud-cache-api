import express from "express";
import {config} from "../constant";
import provider from "./provider";
import {route_put, route_get, route_post, route_delete} from "./route";
import {db} from "../db";

const app:express.Express = provider.app;

db.connect();

app.use(route_get.routes);
app.use(route_put.routes);
app.use(route_post.routes);
app.use(route_delete.routes);

app.listen(config.port,()=> console.log(`server is running on port ${config.port}!`));

