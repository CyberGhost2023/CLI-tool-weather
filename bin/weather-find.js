import { program } from "commander";
import findCmd from "../commands/find.js"

program
    .command('city')
    .description('Get Weather of city')
    .action(findCmd.city)

program.parse(process.argv);
