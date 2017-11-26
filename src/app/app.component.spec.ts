import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppService } from './app.service';
import { ForecastService } from './services/forecast.service';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let baseTime = new Date(2017, 9, 23);
  jasmine.clock().mockDate(baseTime);
  
  const mockData: any =  [
  {
    "city" : {
      "name": 'London'
    },
    "main": {
      "temp": 7.31
    },
    "dt_txt": baseTime
  },
  {
    "city" : {
      "name": 'London'
    },
    "main": {
      "temp": 8
    },
    "dt_txt": new Date(2017, 9, 24)
  },
  {
    "city" : {
      "name": 'London'
    },
    "main": {
      "temp": 9
    },
    "dt_txt": new Date(2017, 9, 25)
  },
  {
    "city" : {
      "name": 'London'
    },
    "main": {
      "temp": 12
    },
    "dt_txt": new Date(2017, 9, 25)
  },
  {
    "city" : {
      "name": 'London'
    },
    "main": {
      "temp": 10
    },
    "dt_txt": new Date(2017, 9, 26)
  },
  {
    "city" : {
      "name": 'London'
    },
    "main": {
      "temp": 11
    },
    "dt_txt": new Date(2017, 9, 26)
  },
  {
    "city" : {
      "name": 'London'
    },
    "main": {
      "temp": 7
    },
    "dt_txt": new Date(2017, 9, 27)
  }
  ];

  const AppServiceStub = {
    doSearch: query => Observable.of({list:mockData}) 
  }

  const ForecastServiceStub = {
    forecastCity: data =>  null
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas:[NO_ERRORS_SCHEMA],
      declarations: [
        AppComponent
      ],
      providers: [
        { 
          provide: AppService, 
          useValue: AppServiceStub
        },
        { 
          provide: ForecastService, 
          useValue: ForecastServiceStub
        }        
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

  });

  it('should create the app', () => {
    expect(comp).toBeTruthy();
  });

  it('shouldn\'t perform search if query is not provided ', () => {
    spyOn(AppServiceStub, 'doSearch').and.returnValue(Observable.of({}));

    comp.doSearch();

    expect(AppServiceStub.doSearch).not.toHaveBeenCalled();
  });

  it('should perform search if query is not provided ',() => {
    const appService: any = fixture.debugElement.injector.get(AppService);
    
    spyOn(appService, 'doSearch').and.callThrough();

    comp.doSearch("london");
    
    expect(appService.doSearch).toHaveBeenCalled();
  });

});
