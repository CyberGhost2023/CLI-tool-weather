import Configstore from "configstore";
import axios from "axios";

class FindManager{
    constructor(apikey){
        this.apiKey=apikey;
    }
    
    async getCityWeather(cityName,tempType){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}&units=${tempType}`;
        const result= await axios.get(url);
        console.log(result.data);
    }
    async getGeoWeather(lat,lon,tempType){
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=${tempType}`;
        const result= await axios.get(url);
        console.log(result.data);
    }
}

export default FindManager;