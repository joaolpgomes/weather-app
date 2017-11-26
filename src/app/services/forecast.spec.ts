import { TestBed, async, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ForecastService } from './forecast.service';

describe('SearchService', () => {

  let http;
  let baseTime = new Date(2017, 9, 23);
  jasmine.clock().mockDate(baseTime);
  
  const mockData: any =  {
    'city' : {
      'name': 'London'
    },
    'list':[{
      'main': {
        'temp': 7.31
      },
      'dt_txt': baseTime,
      'weather': [{'icon':'image.png'}]      
    },
    {
      'main': {
        'temp': 8
      },
      'dt_txt': new Date(2017, 9, 24),
      'weather': [{'icon':'image.png'}]      
    },
    {
      'main': {
        'temp': 9
      },
      'dt_txt': new Date(2017, 9, 25),
      'weather': [{'icon':'image.png'}]      
    },
    {
      'main': {
        'temp': 12
      },
      'dt_txt': new Date(2017, 9, 25),
      'weather': [{'icon':'image.png'}]      
    },
    {
      'main': {
        'temp': 10
      },
      'dt_txt': new Date(2017, 9, 26),
      'weather': [{'icon':'image.png'}]      
    },
    {
      'main': {
        'temp': 11
      },
      'dt_txt': new Date(2017, 9, 26),
      'weather': [{'icon':'image.png'}]
    },
    {
      'main': {
        'temp': 7
      },
      'dt_txt': new Date(2017, 9, 27),
      'weather': [{'icon':'image.png'}]      
    }
  ]
};

  
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ForecastService]
    });

  });

 it('should forecast list for the next 5 days', inject([ForecastService], (service: ForecastService) => {
    
    const forecastList = service.forecastCity(mockData);
    expect(forecastList[0].day).toBe(baseTime.toDateString());

    expect(forecastList[1].day).toBe(new Date(2017, 9, 24).toDateString());

    expect(forecastList[2].day).toBe(new Date(2017, 9, 25).toDateString());

    expect(forecastList[3].day).toBe(new Date(2017, 9, 26).toDateString());
    expect(forecastList[3].weather[1].temperature).toBe(11);  
    
    expect(forecastList[4].day).toBe(new Date(2017, 9, 27).toDateString());
    
  }));


});

