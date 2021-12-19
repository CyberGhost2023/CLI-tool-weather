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
    .description('Get Current API Key')
    .action(()=>{
        keyCmd.show();
    })

program
    .command('remove')
    .description('Remove API Key')
    .action(()=>{
        keyCmd.remove()
    })

program.parse(process.argv);