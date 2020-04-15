import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { DatePipe } from '@angular/common';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherComponent ]
    })
    .compileComponents();
  }));


    // it ('should display date in short format', () => {

    //     const pipe = new DatePipe('en-US');
    //     const result = pipe.transform(pipe);
    //     expect(result).toBe("4/11/20");

    // })
});
