import { Component, Input } from '@angular/core';

@Component({
  selector: 'weather-forecast',
  template: `
  
  <div class="weather-forecast-container">
    <div class="weather-forecast-container__day">{{forecast.day | date}}</div>

    <weather-time
        *ngFor="let weatherTime of forecast.temperaturesDay" 
        [weatherTime]="weatherTime">
    </weather-time>
                      
  </div>
  `,
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent {

  @Input() forecast: any;

  public constructor() { }

}
