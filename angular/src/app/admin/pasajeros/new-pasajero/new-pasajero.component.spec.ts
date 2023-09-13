import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPasajeroComponent } from './new-pasajero.component';

describe('NewPasajeroComponent', () => {
  let component: NewPasajeroComponent;
  let fixture: ComponentFixture<NewPasajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPasajeroComponent]
    });
    fixture = TestBed.createComponent(NewPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
