import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitarCitasComponent } from './litar-citas.component';

describe('LitarCitasComponent', () => {
  let component: LitarCitasComponent;
  let fixture: ComponentFixture<LitarCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitarCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
