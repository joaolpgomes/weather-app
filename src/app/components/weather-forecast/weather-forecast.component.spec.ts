import { TestBed, async } from '@angular/core/testing';
import { WeatherForecastComponent } from './weather-forecast.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WeatherForecastComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],                  
      declarations: [
        WeatherForecastComponent
      ],
    }).compileComponents();
  }));

  it('should create the WeatherForecast component', async(() => {
    const fixture = TestBed.createComponent(WeatherForecastComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
