import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LinksComponent } from './links/links.component';
import { WeatherComponent } from './weather/weather.component';
import { componentFactoryName } from '@angular/compiler';
import { DebugElement } from '@angular/core';


describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    let de: DebugElement;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [AppComponent]
        });
      });
    
      beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
      });
    });
  
    // describe('onChange', () => {
    //     let component: AppComponent;
    //     let de: DebugElement;
    //     it('should be called with whatever the counter change event emits', () => {
    //         spyOn(component, 'onChange');
    //         const counter = de.query(By.directive(CounterComponent));
    //         const cmp = counter.componentInstance;
    //         cmp.change.emit(1);
    //         expect(component.onChange).toHaveBeenCalledWith(1);
    //       });
    // });
    
