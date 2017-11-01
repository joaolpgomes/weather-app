import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppService } from './app.service';
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
    "main": {
      "temp": 7.31
    },
    "dt_txt": baseTime
  },
  {
    "main": {
      "temp": 8
    },
    "dt_txt": new Date(2017, 9, 24)
  },
  {
    "main": {
      "temp": 9
    },
    "dt_txt": new Date(2017, 9, 25)
  },
  {
    "main": {
      "temp": 12
    },
    "dt_txt": new Date(2017, 9, 25)
  },
  {
    "main": {
      "temp": 10
    },
    "dt_txt": new Date(2017, 9, 26)
  },
  {
    "main": {
      "temp": 11
    },
    "dt_txt": new Date(2017, 9, 26)
  },
  {
    "main": {
      "temp": 7
    },
    "dt_txt": new Date(2017, 9, 27)
  }
  ];

  const AppServiceStub = {
    doSearch: (query) =>  {
      return Observable.of({list:mockData})
    }
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

  it('should forecast list for the next 5 days',() => {
    const appService: any = fixture.debugElement.injector.get(AppService);
    
    comp.doSearch("london");

    expect(comp.forecastList[0].day).toBe(baseTime.toDateString());
    expect(comp.forecastList[0].temperaturesDay.length).toBe(1);  

    expect(comp.forecastList[1].day).toBe(new Date(2017, 9, 24).toDateString());
    expect(comp.forecastList[1].temperaturesDay.length).toBe(1);  

    expect(comp.forecastList[2].day).toBe(new Date(2017, 9, 25).toDateString());
    expect(comp.forecastList[2].temperaturesDay.length).toBe(2); 

    expect(comp.forecastList[3].day).toBe(new Date(2017, 9, 26).toDateString());
    expect(comp.forecastList[3].temperaturesDay.length).toBe(2);  
    expect(comp.forecastList[3].temperaturesDay[1].main.temp).toBe(11);  
    
    expect(comp.forecastList[4].day).toBe(new Date(2017, 9, 27).toDateString());
    expect(comp.forecastList[4].temperaturesDay.length).toBe(1);    
    
  });
});
