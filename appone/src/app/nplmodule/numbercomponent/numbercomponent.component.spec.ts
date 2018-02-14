import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbercomponentComponent } from './numbercomponent.component';

describe('NumbercomponentComponent', () => {
  let component: NumbercomponentComponent;
  let fixture: ComponentFixture<NumbercomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbercomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
