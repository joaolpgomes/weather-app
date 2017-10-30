import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { WeatherTimeComponent } from './components/weather-time/weather-time.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';

import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WeatherSearchComponent,
    WeatherTimeComponent,
    WeatherForecastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
