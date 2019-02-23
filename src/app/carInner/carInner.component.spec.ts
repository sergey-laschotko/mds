import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInnerComponent } from './carInner.component';

describe('ModalComponent', () => {
  let component: CarInnerComponent;
  let fixture: ComponentFixture<CarInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
