import Configstore from "configstore";

class keyManager{
    constructor(){
        this.conf= new Configstore('weather-tool');
    }
    setKey(key){
        this.conf.set('ApiKey',key);
        return key;
    }
    getKey(){
        let api=this.conf.get('ApiKey');
        if(!api)
        {
            throw new Error("No API Key Found")
        }
        return api;
    }
    removeKey(){
        let api=this.conf.get('ApiKey');
        if(!api)
        {
            throw new Error("No API Key Found")
        }
        this.conf.delete('ApiKey');
        return;
    }
}

export default keyManager