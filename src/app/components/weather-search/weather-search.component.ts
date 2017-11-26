import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'weather-search',
  template: `
      <div class="search-container">
        <input
        #input
        (keyup)="onKeyUp(input.value)"
        placeholder="Type to start searching..."
        class="input-el"/>
      </div>
    `
    ,
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {


    /**
     * Emits search string on each change
     */
    @Output() public search: EventEmitter<string> = new EventEmitter();

    private keyUpStream: EventEmitter<string> = new EventEmitter();

    /**
     * @description
     * Only sends event
     */
    public ngOnInit(): void {
      this.keyUpStream
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe((value) => {
          this.search.emit(value)
        });
    }

    /**
     * @description
     * When key is pressed
     *
     * @param value
     */
    public onKeyUp(value: string): void {
      if(value.length > 3) {
        this.keyUpStream.emit(value);        
      }
    }
}
