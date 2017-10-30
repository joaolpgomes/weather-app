import { Component, Input } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  template:  `
    <weather-search
      (search)="doSearch($event)">
    </weather-search>

    <ng-container *ngIf="forecastList.length > 0">
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
  forecastList: any;

  public constructor(private searchService: AppService){}

  /**
   * Perform search
   *
   * @param query
   */
  public doSearch(query?: string): void {
    if (query) {
      this.searchService
      .doSearch(query)
      .subscribe((result: any) => {

        let currentDay = new Date();

        this.forecastList = [];

        this.forecastList.push({
          day: currentDay.toDateString(),
          temperaturesDay: []
        });

        for(let i = 0; i < result.list.length; i++){

          let weatherTime = new Date(result.list[i].dt_txt).toDateString();

          //checks if its part of the day
          if(currentDay.toDateString() === weatherTime){

            //adds another 3-hour weather forecast
            this.forecastList.map((item) => {
               if(item.day === weatherTime){
                  item.temperaturesDay.push(result.list[i]);
               }
            });

          }else{
            currentDay.setDate(currentDay.getDate() + 1); //next day

            //if it's a new day, adds a new entrance to the forecast list
            this.forecastList.push({
              day: currentDay.toDateString(),
              temperaturesDay: [result.list[i]]
            });

          }
        }
      });
    }
  }
}
