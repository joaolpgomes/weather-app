import { Component, Input, ViewEncapsulation } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { AppService } from './app.service';
import { ForecastService } from './services/forecast.service';

import { Forecast } from './models/forecast.model';
import { Weather } from './models/weather.model';

@Component({
  encapsulation: ViewEncapsulation.None,  
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],  
  template:  `
    <weather-search
      (search)="doSearch($event)">
    </weather-search>

    <ng-container *ngIf="error?.length > 0">
        {{error}}
    </ng-container>

    <ng-container *ngIf="forecastList?.length > 0">
      <weather-forecast 
          *ngFor="let item of forecastList"
          [forecast]="item">
      </weather-forecast>
    </ng-container>
    
  `
})
export class AppComponent {

  /**
   * list of days with a list of 3-hour weather forecast
   */
  forecastList: Forecast[];
  error: string;

  public constructor(private appService: AppService, private forecastService: ForecastService){}

  /**
   * Perform search
   *
   * @param query
   */
  public doSearch(query?: string): void {
    this.error = '';
    if (query) {
      this.appService
      .doSearch(query)
      .subscribe((result: any) => {
        this.forecastList = this.forecastService.forecastCity(result);
      },
      (err: HttpErrorResponse) => {
        this.error = 'Something is wrong. Try to search again!!!'; 
      });
    }
  }
}
