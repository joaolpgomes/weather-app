import { AppService } from '../app.service';

export class Weather{

   private _time: any;
   private _temperature: any;
   private _image: string;

   constructor(time: string, temperature: any, image: any){
        this._time = time;
        this._temperature = Math.round(temperature);
        this._image = `${AppService.WEATHER_API_IMG}${image}.png`;
   }


   get time(){
       return this._time;
   }

   get temperature(){
       return this._temperature;
   }

   get image(){
       return this._image;
   }
}