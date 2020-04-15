import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherComponent } from './weather.component';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [{provide: Router, useValue: routerSpy }]
    })
    .compileComponents();
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.debugElement.componentInstance;
  }));


    // it ('should display date in short format', () => {

    //     const pipe = new DatePipe('en-US');
    //     const result = pipe.transform(pipe);
    //     expect(result).toBe(pipe.transform("dd/mm/yyyy"));
    // })

    // it('should return false if the form control is not valid', () => {
    //     component.ngOnInit();
    //     expect(component.weatherSearchForm.valid).toBe(false);
    // })
    describe('invalid form', () => {
        it('should return false if the form control is not valid', () => {
            component.ngOnInit();
            expect(component.weatherSearchForm.valid).toBe(false);
          });
    })
   

});
