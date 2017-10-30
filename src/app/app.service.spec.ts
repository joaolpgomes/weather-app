import { TestBed, async, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AppService } from './app.service';

describe('SearchService', () => {

  let http,
  mockData = {"message":"accurate","cod":"200","count":1,"list":[{"id":2643743,"name":"London","coord":{"lat":51.5085,"lon":-0.1258},"main":{"temp":7,"pressure":1012,"humidity":81,"temp_min":5,"temp_max":8},"dt":1485791400,"wind":{"speed":4.6,"deg":90},"sys":{"country":"GB"},"rain":null,"snow":null,"clouds":{"all":90},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50d"},{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}]}]};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [AppService]
    });

    http = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));

  it('should perform a search',  async(inject([AppService], (service: AppService) => {
      const query = 'london';
      let result;
      service
        .doSearch(query)
        .subscribe(data => {
          result = data;
        });
  })));
});

