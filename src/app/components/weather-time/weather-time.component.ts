import { Component, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'weather-time',
  template: `
  <div class="weather-time-container">
    <div class="weather-time-temp">
            <img src="{{weatherTime.image}}"/>
            <div>{{weatherTime.time | date: 'shortTime'}}</div>
            <div>{{weatherTime.temperature}} &#8451;</div>
    </div>
  </div>
  `,
  styleUrls: ['./weather-time.component.css']
})
export class WeatherTimeComponent {

  @Input() weatherTime: Weather;

  public constructor(private appService: AppService) { }

}
