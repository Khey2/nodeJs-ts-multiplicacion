import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFileUseCase } from "../domain/use-cases/save-file-use-case";

interface RunOption{
    base: number;
    limit: number;
    ShowTable: boolean;
    name: string;
    destination: string
}

//orquestara como funciona la aplicacion...
export class ServerApp {

    static async run({ base, limit, ShowTable, name, destination}: RunOption){
        console.log("Server runing....");
        

        //caso de uso 1: crear la tabla
        const table = new CreateTable().execute( {base, limit});
        const wasSaved = new SaveFileUseCase()
        .execute({fileContent: table, destination, fileNameDestination: name});

        if( ShowTable ) console.log(table);
        
        ( wasSaved ) 
            ? console.log("File created")
            : console.log("File not created")
        
        //casod e uso 2: guardar archivo en fs

    }   
}