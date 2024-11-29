import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresarNombrePage } from './ingresar-nombre.page';

describe('IngresarNombrePage', () => {
  let component: IngresarNombrePage;
  let fixture: ComponentFixture<IngresarNombrePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarNombrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
