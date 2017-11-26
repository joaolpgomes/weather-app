
import { HttpClient, HttpParams}            from "@angular/common/http";
import { Injectable }                   from '@angular/core';
import { Observable}                        from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

  static readonly WEATHER_API_BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast';
  static readonly WEATHER_API_CLIENT_ID = 'c3241df455f028568122df622974dad3';
  static readonly WEATHER_API_UNITS = 'metric';
  static readonly WEATHER_API_IMG = 'http://openweathermap.org/img/w/';
  
  constructor(private httpClient: HttpClient) {}
/**
   * Perform search action
   * @param query
   */
  public doSearch(query: string): Observable<any> {
    let params = new HttpParams();

    if(query) params = params.set('q', query);
    params = params.set('appid', AppService.WEATHER_API_CLIENT_ID);
    params = params.set('units', AppService.WEATHER_API_UNITS);

    return this.httpClient.get(AppService.WEATHER_API_BASE_URL,{
        responseType: 'json',
        params: params
      });
  }

}
