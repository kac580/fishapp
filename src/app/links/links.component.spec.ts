import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksComponent } from './links.component';

import { RouterTestingModule } from '@angular/router/testing';

it('should render title in a h4 tag', () => {
    const fixture = TestBed.createComponent(LinksComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Helpful Articles');
  })