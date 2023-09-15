import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPasajeroComponent } from './add-pasajero.component';

describe('AddPasajeroComponent', () => {
  let component: AddPasajeroComponent;
  let fixture: ComponentFixture<AddPasajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPasajeroComponent]
    });
    fixture = TestBed.createComponent(AddPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
