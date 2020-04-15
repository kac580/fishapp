import { async, ComponentFixture, inject, TestBed, resetFakeAsyncZone } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherComponent } from './weather.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
const fakeActivatedRoute = {
  snapshot: {
    queryParms: {
      returnUrl: '/'
    }
  }
}
const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      
      providers: [
        {provide: Router, useValue: routerSpy },
        {provide: ActivatedRoute, useFactory: () => fakeActivatedRoute }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.debugElement.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  }));
  

//// invalid date format - need to figure out how to transform date
    // it ('should display date in short format', () => {

    //     const pipe = new DatePipe('en-US');
    //     const result = pipe.transform(pipe);
    //     expect(result).toBe(pipe.transform("dd/mm/yyyy"));
    // })

    it('should return false if the form control is not valid', () => {
        component.ngOnInit();
        expect(component.weatherSearchForm.valid).toBe(false);
    })
 
  it('should render a sentence in a h5 tag', () => {
      const fixture = TestBed.createComponent(WeatherComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h5').textContent).
      toContain('Where do you want to fish?');
    });
  
});


