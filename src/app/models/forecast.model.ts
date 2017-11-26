import { Weather } from './weather.model';

export class Forecast{
    private _day: string;
    private _city: string;
    private _weather: any; //Weather

    constructor(city: string, day: string){
        this._city = city;
        this._day = day;
        this._weather = [];
    }

    

    set weather(weather: Weather){
        this._weather.push(weather);
    }

    set day(day: string){
        this._day = day;
    }

    get weather(){
        return this._weather;
    }

    get day(){
        return this._day;
    }

}