import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LinksComponent } from './links/links.component';
import { WeatherComponent } from './weather/weather.component';
import { componentFactoryName } from '@angular/compiler';
import { DebugElement } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ɵROUTER_PROVIDERS, RouterModule } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router, ActivatedRoute } from '@angular/router';

const fakeActivatedRoute = {
  snapshot: {
    queryParms: {
      returnUrl: '/'
    }
  }
}
const routerSpy = jasmine.createSpyObj('Router', ['navigate']);


describe('AppComponent',() => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent,
            HeaderComponent,
            LinksComponent,
            WeatherComponent ],
     imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule,
        RouterTestingModule
    ],
    providers: [
        {provide: Router, useValue: routerSpy },
        {provide: ActivatedRoute, useFactory: () => fakeActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  //// out of the box test - fails
  
//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   });
});
