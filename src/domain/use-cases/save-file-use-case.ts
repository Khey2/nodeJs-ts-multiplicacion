import  fs  from "fs";

export interface Options{
    fileContent     : string;
    destination?    : string;
    fileNameDestination?       : string;
}

export class SaveFileUseCase implements SaveFileUseCase{
    // DI
    constructor(
        /* repository: StorageRepository (aws, fttp, fs )*/
    ){}

    execute( {
        fileContent, 
        fileNameDestination = "table", 
        destination = "outputs"
    }: Options ): boolean{
        try{           
            fs.mkdirSync(destination, { recursive: true});
            fs.writeFileSync(`${destination}/${fileNameDestination}.txt`, fileContent);
            return true;
        }catch(error){

            return false
        }
    }

}