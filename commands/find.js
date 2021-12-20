import colors from "colors"
import inquirer from "inquirer"
import isRequired from "../utils/validation.js"
import FindManager from "../lib/findManager.js"
import KeyManager from "../lib/keyManager.js";

const findCmd={
    async city(tempType){
        const input = await inquirer.prompt({
            type:'input',
            name:'city',
            message:'Enter City Name '.blue ,
            validate:isRequired
        })
        const keyManager = new KeyManager();
        try{
            const apikey= keyManager.getKey();
            const findManager = new FindManager(apikey);
            findManager.getCityWeather(input.city,tempType);
        }catch(err)
        {
            console.log(err);
            console.log("Set API key First".red);
        }
    },

    async latlon(tempType){
        const input = await inquirer.prompt([{
            type:'input',
            name:'lat',
            message:'Enter latitude '.blue +" Get it at https://openweathermap.org ",
            validate:isRequired
        },
        {
            type:'input',
            name:'lon',
            message:'Enter longitude '.blue +" Get it at https://openweathermap.org ",
            validate:isRequired
        }])
        const keyManager = new KeyManager();
        try{
            const apikey= keyManager.getKey();
            const findManager = new FindManager(apikey);
            const lat = parseFloat(input.lat)
            const lon = parseFloat(input.lon)
            findManager.getGeoWeather(lat,lon,tempType);
        }catch(err)
        {
            console.log(err);
            console.log("Set API key First".red);
        }
    }
}

export default findCmd;


