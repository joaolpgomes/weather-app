import { TestBed, async } from '@angular/core/testing';
import { WeatherTimeComponent } from './weather-time.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppService } from '../../app.service';



describe('WeatherTimeComponent', () => {

  const AppServiceStub = {
    doSearch: query => null 
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],            
      declarations: [
        WeatherTimeComponent
      ],
      providers: [
        { 
          provide: AppService, 
          useValue: AppServiceStub
        }     
      ]
    }).compileComponents();
  }));

  it('should create the WeatherTimeComponent component', async(() => {
    const fixture = TestBed.createComponent(WeatherTimeComponent);
    const wtComponent = fixture.debugElement.componentInstance;
    expect(wtComponent).toBeTruthy();
  }));

});
