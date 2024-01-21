import {exec, spawn} from 'child_process'
import log from 'console'


let controller = new AbortController();
let {signal} = controller;

export async function cleanSh() 
{
    const spawnClean = spawn
    (
        "sh /home/yote/OpenFOAM/yote-9/run/server/src/services/kursach2/Clean.sh",
        [],
        {shell: true, signal}
    );

    let statusMessage = "";
  
    spawnClean.stdout.on("data", data => console.log(`stdout: ${data}`));
    spawnClean.stderr.on("data", data => console.log(`stderr: ${data}`));
    spawnClean.on("error", error => 
    {
        statusMessage = "Увы и ах, не удалось очистить данные предыдущего решения."
        console.log(`error: ${error.message}`);
        return statusMessage;
    });

    spawnClean.on("spawn", () => 
    {
        statusMessage = "Данные предыдущего решения успешно удалены, ничего себе."
        console.log("cleaned");
        return statusMessage;
    });

    spawnClean.on("close", (code) => 
    {
        console.log(`Clean process exited, code: ${code}`);
    })

  }
  
export async function changeParamsSh() 
{
    const spawnClean = spawn
    (
        "sh /home/yote/OpenFOAM/yote-9/run/server/src/services/kursach2/ChangeParams.sh",
        [],
        {shell: true, signal}
    );

    let statusMessage = "";
  
    spawnClean.stdout.on("data", data => console.log(`stdout: ${data}`));
    spawnClean.stderr.on("data", data => console.log(`stderr: ${data}`));
    
    spawnClean.on("error", error => 
    {
        statusMessage = "Увы и ах, не удалось изменить размеры"
        console.log(`error: ${error.message}`);
        return statusMessage;
    });

    spawnClean.on("spawn", () => 
    {
        statusMessage = "Размеры изменены, нереальный шок."
        console.log("cleaned");
        return statusMessage;
    });

        spawnClean.on("close", (code) => {
        console.log(`Clean process exited, code: ${code}`);

    })
}
  
export async function runSh() 
{
    const spawnClean = spawn
    (
        "sh /home/yote/OpenFOAM/yote-9/run/server/src/services/kursach2/Run.sh",
        [],
        {shell: true, signal}
    );

    let statusMessage = "";
  
    spawnClean.stdout.on("data", data => console.log(`stdout: ${data}`));
    spawnClean.stderr.on("data", data => console.log(`stderr: ${data}`));

    spawnClean.on("error", error => 
    {
        statusMessage = "Увы и ах, не удалось запустить расчёт"
        console.log(`error: ${error.message}`);
        return statusMessage;
    });

    spawnClean.on("spawn", () => 
    {
        statusMessage = "Расчёт запущен, удивительно."
        console.log("cleaned");
        return statusMessage;
    });

    spawnClean.on("close", (code) => 
    {
        console.log(`Clean process exited, code: ${code}`);
    });

}
  