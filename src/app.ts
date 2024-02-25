import {  yarg } from "./config/plugins/yarns.plugin";
import { ServerApp } from "./presentation/server-app";

// console.log(process.argv)

//tomar los argumentos
// const [ tsnode, app, ...args] = process.argv;

(async ()=>{
     await main();
})();


async function main(){

    const { b:base, l:limit, s:ShowTable, n:name, d:destination} = yarg;
    
    ServerApp.run({ base, limit, ShowTable, name, destination}  );

}