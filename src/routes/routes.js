import { Router } from "express";
import HandlerStart from "../handlers/start.js"



const routerVar = Router();


routerVar.post("/", HandlerStart)



export default routerVar;