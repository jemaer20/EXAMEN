import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresarEdadPage } from './ingresar-edad.page';

describe('IngresarEdadPage', () => {
  let component: IngresarEdadPage;
  let fixture: ComponentFixture<IngresarEdadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarEdadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
