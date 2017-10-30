import { Component, Input } from '@angular/core';

@Component({
  selector: 'weather-time',
  template: `
  <div class="weather-time-container">
    <div class="weather-time-temp">
            <img src="http://openweathermap.org/img/w/{{weatherTime.weather[0].icon}}.png"/>
            <div>{{weatherTime.dt_txt | date: 'shortTime'}}</div>
            <div>{{weatherTime.main.temp.toFixed(1)}} &#8451;</div>
    </div>
  </div>

  `,
  styleUrls: ['./weather-time.component.css']
})
export class WeatherTimeComponent {

  @Input() weatherTime: any;

  public constructor() { }

}
