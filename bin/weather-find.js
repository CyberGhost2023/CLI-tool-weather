import { program } from "commander";
import findCmd from "../commands/find.js"

program
    .command('city')
    .description('Get Weather of city')
    .option('--temp <type>','Add specific temperature unit (K-Kelvin, F-Fahrenheit, C-Celsius','K')
    .action(({temp:opt})=>{
        if(opt=='K' || opt=='k')
            opt='standard'
        else if(opt=='C' || opt=='c')
            opt='metric'
        else if(opt=='F' || opt=='f')
            opt='imperial'
        findCmd.city(opt);
    })
    
program.parse(process.argv);
