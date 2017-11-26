import { Component, Input } from '@angular/core';
import { Forecast } from '../../models/forecast.model';

@Component({
  selector: 'weather-forecast',
  template: `
  
  <div class="weather-forecast-container">
    <div class="weather-forecast-container__day">{{forecast.day | date}}</div>

    <weather-time
        *ngFor="let weatherTime of forecast.weather" 
        [weatherTime]="weatherTime">
    </weather-time>
                      
  </div>
  `,
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent {

  @Input() forecast: Forecast;

  public constructor() { }

}
