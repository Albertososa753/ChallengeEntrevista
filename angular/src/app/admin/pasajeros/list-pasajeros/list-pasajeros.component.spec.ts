import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPasajerosComponent } from './list-pasajeros.component';

describe('ListPasajerosComponent', () => {
  let component: ListPasajerosComponent;
  let fixture: ComponentFixture<ListPasajerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPasajerosComponent]
    });
    fixture = TestBed.createComponent(ListPasajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
