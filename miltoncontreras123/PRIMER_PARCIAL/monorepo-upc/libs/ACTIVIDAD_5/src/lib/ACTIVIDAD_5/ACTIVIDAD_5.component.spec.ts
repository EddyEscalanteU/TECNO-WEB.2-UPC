import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ACTIVIDAD5Component } from './ACTIVIDAD_5.component';

describe('ACTIVIDAD5Component', () => {
  let component: ACTIVIDAD5Component;
  let fixture: ComponentFixture<ACTIVIDAD5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ACTIVIDAD5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(ACTIVIDAD5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
