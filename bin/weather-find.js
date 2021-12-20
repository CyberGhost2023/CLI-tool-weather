import { program } from "commander";
import findCmd from "../commands/find.js"

program
    .command('city')
    .description('Get Weather of city')
    .option('--temp <type>','Add specific temperature unit (K-Kelvin, F-Fahrenheit, C-Celsius','K')
    .action(({temp:opt})=>{
        if(opt=='C' || opt=='c')
            opt='metric'
        else if(opt=='F' || opt=='f')
            opt='imperial'
        else
            opt='standard'
        findCmd.city(opt);
    })

program
    .command('geo')
    .description('Get Weather of geographic location using latitude and longitude')
    .option('--temp <type>','Add specific temperature unit (K-Kelvin, F-Fahrenheit, C-Celsius','K')
    .action(({temp:opt})=>{    
        if(opt=='C' || opt=='c')
            opt='metric'
        else if(opt=='F' || opt=='f')
            opt='imperial'
        else
            opt='standard'
        findCmd.latlon(opt);
    })
    
program.parse(process.argv);
