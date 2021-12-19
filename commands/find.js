import colors from "colors"
import inquirer from "inquirer"
import isRequired from "../utils/validation.js"
import FindManager from "../lib/findManager.js"
import KeyManager from "../lib/keyManager.js";

const findCmd={
    async city(){
        const input = await inquirer.prompt({
            type:'input',
            name:'city',
            message:'Enter City Name '.blue +" Get it at https://openweathermap.org",
            validate:isRequired
        })
        const keyManager = new KeyManager();
        try{
            const apikey= keyManager.getKey();
            const findManager = new FindManager(apikey);
            findManager.getCityWeather(input.city);
        }catch(err)
        {
            console.log(err);
            console.log("Set API key First".red);
        }

    }
}

export default findCmd;


