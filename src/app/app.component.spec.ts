import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import  {NO_ERRORS_SCHEMA } from '@angular/core';
import { AppService } from './app.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


describe('AppComponent', () => {


  const AppServiceStub = {
    doSearch: (query) =>  {}
  }


  beforeEach(async(() => {
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
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('shouldn\'t perform search if query is not provided ', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(AppServiceStub, 'doSearch').and.returnValue(Observable.of({}));
    
    app.doSearch();
    
    expect(AppServiceStub.doSearch).not.toHaveBeenCalled();
  }));

  it('should perform search if query is not provided ', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(AppServiceStub, 'doSearch').and.returnValue(Observable.of({}));
    
    app.doSearch("london");
    
    expect(AppServiceStub.doSearch).toHaveBeenCalled();
  }));
});
