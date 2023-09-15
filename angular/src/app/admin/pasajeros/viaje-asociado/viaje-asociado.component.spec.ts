import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeAsociadoComponent } from './viaje-asociado.component';

describe('ViajeAsociadoComponent', () => {
  let component: ViajeAsociadoComponent;
  let fixture: ComponentFixture<ViajeAsociadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViajeAsociadoComponent]
    });
    fixture = TestBed.createComponent(ViajeAsociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
