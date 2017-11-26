
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Weather } from '../models/weather.model';
import { Forecast } from "../models/forecast.model";

@Injectable()
export class ForecastService {
  
  constructor() {}

  forecastCity(result: any): Forecast[] {
      const forecastList: Forecast[] = [];
      const currentDay = new Date();
      const forecast = new Forecast(result.city.name, currentDay.toDateString());

      forecastList.push(forecast);

      result.list.forEach(value => {
          const weatherTime = new Date(value.dt_txt).toDateString();
          
          //checks if its part of the day
          if(currentDay.toDateString() === weatherTime){
  
            //adds another 3-hour weather forecast
            forecastList.map(item => {
                if(item.day === weatherTime){
                
                const weather = new Weather(value.dt_txt, value.main.temp, value.weather[0].icon);
                
                item.weather = weather;
                
                }
            });
  
          }else{
            currentDay.setDate(currentDay.getDate() + 1); //next day
  
            const weather = new Weather(value.dt_txt, value.main.temp, value.weather[0].icon);
            const forecast = new Forecast(result.city.name, currentDay.toDateString());
            
            forecast.weather = weather;
  
            //if it's a new day, adds a new entrance to the forecast list
            forecastList.push(forecast);
  
          }
      })

      return forecastList;
  }
}
