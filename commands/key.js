
import keyManager from "../lib/keyManager.js"
import colors from "colors"
import inquirer from "inquirer"
import isRequired from "../utils/validation.js"

const keyCmd={
    async set(){
        const km=new keyManager();
        const input = await inquirer.prompt({
            type:'input',
            name:'key',
            message:'Enter API Key'.blue +" Get it at https://openweathermap.org",
            validate:isRequired
        })
        if(km.setKey(input.key))
        {
            console.log('API Key successfully added'.green);
        }
    },
    show(){
        try{
            const km=new keyManager();
            const key= km.getKey();
            console.log(key.yellow);
        }catch(err){
            console.log("No API Key present to show".red);
        }
    },
    remove(){
        try{
            const km=new keyManager();
            km.removeKey();
            console.log("API Key successfully removed".green);
        }catch(err){
            console.log("No API Key present to remove".red);
        }
    }
}

export default keyCmd;