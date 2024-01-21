import { cleanSh, changeParamsSh, runSh } from "../services/services.js";
import fs from 'fs'


export default async function HandlerStart(req,res,next) 
{   try 
    {
        if (!req.body) res.status(400).send("Не передано данных для рассчёта, ну как же так!")
        
        console.log(req.body);
    
        await cleanSh();
    
        // меняем параметры в txt файле
        const newParamsString = `inlet\n ${req.body.inlet}\n\noutlet\n${req.body.outlet}\n\nparFromRightBlock\n${req.body.parFromRightBlock}`;
    
        console.log("new str");
        console.log(newParamsString);
    
        fs.writeFileSync("/home/yote/OpenFOAM/yote-9/run/kursach2/Params.txt", newParamsString);
    
        await changeParamsSh();
    
        await runSh();
    
        res.send("Успех");
    
    } 
    catch (error) 
    {
        next(err)
    } 
}