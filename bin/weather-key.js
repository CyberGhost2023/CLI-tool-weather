import {program} from "commander"
import keyCmd from "../commands/key.js"

program
    .command('set')
    .description('Set API Key --Get at https://openweathermap.org')
    .action(()=>{
        keyCmd.set();
    })

program
    .command('show')
    .alias('get')
    .description('Get Current API Key')
    .action(()=>{
        keyCmd.show();
    })

program
    .command('remove')
    .alias('rem')
    .description('Remove API Key')
    .action(()=>{
        keyCmd.remove()
    })

program.parse(process.argv);