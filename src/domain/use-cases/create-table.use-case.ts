//objetivo: crear la DATA dela rchivo

export interface CreateTableOptions {
    base: number;
    limit?:number
}

export interface CreateTableUseCase {
    execute: ( options: CreateTableOptions)=> string;
}

export class CreateTable  implements CreateTableUseCase{
    constructor(
         /*
            Dependency Injection ( DI )
        */
    ){}

    // puede llamarse run o create en otros  lugares
    //aqui ejecutaras el caso de uso.
    //creara la tabla!
    execute( { base , limit = 10}: CreateTableOptions ){
        let outputMessage = "";
        for(let i = 1; i <= limit; i++){
            outputMessage += `${ base } x ${ i } = ${ base * i} \n`;
            
        }

        return outputMessage;
        
    }
}