//patrond adaptador para yarns 17.2.2

//paquete yargs
import yargs, { boolean } from "yargs";
//oculta el folder donde se ejecuto el script
import { hideBin  } from "yargs/helpers";


export const yarg = yargs(hideBin(process.argv))
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Multiplicaton table base"
    })
    .option("l",{
        alias: "list",
        type: "number",
        default: 10,
        describe: "Multiplication limit"
    })
    .option("s",{
        alias: "show",
        type: "boolean",
        default: false,
        describe: "Show multiplication Table"
    })
    .option("n",{
        alias: "name",
        type: "string",
        default: "multiplicacion-table",
        describe: "file name"
    })
    .option("d",{
        alias: "destination",
        type: "string",
        default: "outputs",
        describe: "file destination"
    })
    .check((argv, options)=>{
        
        if(argv.b < 1) throw "El valor de la abse debe ser mayor a 0";
        

        return true;
    })
    .parseSync();